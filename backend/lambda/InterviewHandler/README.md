# InterviewHandler — "Interview My AI" chatbot backend

Lambda behind the Interview Me section on hansenwebservices.com. Receives a chat
history, answers as AI-Marcus via Claude Haiku 4.5 (`claude-haiku-4-5`) through
the Claude API, using the official `@anthropic-ai/sdk`. Auth is an Anthropic
Console API key stored as the `ANTHROPIC_API_KEY` environment variable on the
Lambda — never in code or the repo.

## Request / response

```
POST <function-url>
{ "messages": [ { "role": "user", "content": "..." }, ... ] }   // ≤16 turns, ≤1500 chars each, first & last must be user
→ { "reply": "..." }
```

## Deploy

```bash
cd backend/lambda/InterviewHandler
npm install --omit=dev
zip -r function.zip index.mjs node_modules package.json

# One-time: basic execution role (logs only — no other AWS permissions needed)
aws iam create-role --role-name interview-handler-role \
  --assume-role-policy-document '{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Service":"lambda.amazonaws.com"},"Action":"sts:AssumeRole"}]}'
aws iam attach-role-policy --role-name interview-handler-role \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

# One-time: function + public function URL (key is prompted, not stored in shell history)
read -s ANTHROPIC_API_KEY
aws lambda create-function --function-name InterviewHandler \
  --runtime nodejs22.x --handler index.handler --timeout 60 --memory-size 256 \
  --role arn:aws:iam::<ACCOUNT_ID>:role/interview-handler-role \
  --environment "Variables={ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY}" \
  --zip-file fileb://function.zip
aws lambda create-function-url-config --function-name InterviewHandler \
  --auth-type NONE --cors '{"AllowOrigins":["*"],"AllowMethods":["POST"],"AllowHeaders":["content-type"]}'
aws lambda add-permission --function-name InterviewHandler \
  --statement-id public-url --action lambda:InvokeFunctionUrl \
  --principal '*' --function-url-auth-type NONE

# Code updates
aws lambda update-function-code --function-name InterviewHandler --zip-file fileb://function.zip

# Key rotation
aws lambda update-function-configuration --function-name InterviewHandler \
  --environment "Variables={ANTHROPIC_API_KEY=$NEW_KEY}"
```

Paste the function URL into `src/config/interview.ts`.

## Abuse controls

Input caps (16 turns / 1500 chars / 10K total), `max_tokens: 500`. For a hard
spend ceiling, set reserved concurrency (e.g. `aws lambda
put-function-concurrency --function-name InterviewHandler
--reserved-concurrent-executions 2`) and set a monthly spend limit on the
Anthropic Console (Settings → Limits). Typical cost ≈ $0.002–0.004 per chat
turn at Haiku 4.5 pricing ($1/$5 per MTok). If answer quality ever feels thin,
bump `MODEL` to `claude-sonnet-5` or `claude-opus-4-8` (note: those models
also accept `output_config: {effort: "low"}` to control cost — Haiku 4.5 does
not support the effort parameter).
