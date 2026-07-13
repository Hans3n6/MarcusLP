# CompanyPageHandler — magic-link company pages

Backend for `hansenwebservices.com/for?c=<Company>[&r=<Role>]`. First request
for a company generates a personalized "Why Marcus fits <Company>" page with
Claude Haiku 4.5 (structured JSON output) and caches it in DynamoDB
(`hws-company-pages`, pk `slug`). Every later visit is a cache read — instant
and free. Auth: `ANTHROPIC_API_KEY` env var on the Lambda (Claude Console key).

## Request / response

```
GET <function-url>?c=Humana&r=AI%20Engineer
→ { company, role, generatedAt, headline, intro, fitPoints: [{title, text} x4], closing, lane: "ai"|"healthcare"|"cs" }
```

## Pre-warm on every application (Marcus's workflow)

When applying to a company, warm its page so the recruiter never waits:

```bash
curl -s "<function-url>?c=Humana&r=AI%20Engineer" > /dev/null
```

Then put `hansenwebservices.com/for?c=Humana&r=AI%20Engineer` on the application.
To regenerate a page (e.g. after a prompt change), delete the item:

```bash
aws dynamodb delete-item --table-name hws-company-pages --key '{"slug":{"S":"humana--ai-engineer"}}'
```

## Deploy

```bash
cd backend/lambda/CompanyPageHandler
npm install --omit=dev
zip -rq function.zip index.mjs node_modules package.json

# One-time: cache table (on-demand billing ≈ $0)
aws dynamodb create-table --table-name hws-company-pages \
  --attribute-definitions AttributeName=slug,AttributeType=S \
  --key-schema AttributeName=slug,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST

# One-time: role
aws iam create-role --role-name company-page-handler-role \
  --assume-role-policy-document '{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Service":"lambda.amazonaws.com"},"Action":"sts:AssumeRole"}]}'
aws iam attach-role-policy --role-name company-page-handler-role \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
aws iam put-role-policy --role-name company-page-handler-role --policy-name dynamo-cache \
  --policy-document '{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Action":["dynamodb:GetItem","dynamodb:PutItem"],"Resource":"arn:aws:dynamodb:us-east-1:<ACCOUNT_ID>:table/hws-company-pages"}]}'

# One-time: function + public URL (key prompted, not stored in history)
read -s ANTHROPIC_API_KEY
aws lambda create-function --function-name CompanyPageHandler \
  --runtime nodejs22.x --handler index.handler --timeout 60 --memory-size 256 \
  --role arn:aws:iam::<ACCOUNT_ID>:role/company-page-handler-role \
  --environment "Variables={ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY,TABLE_NAME=hws-company-pages}" \
  --zip-file fileb://function.zip
aws lambda create-function-url-config --function-name CompanyPageHandler \
  --auth-type NONE --cors '{"AllowOrigins":["*"],"AllowMethods":["GET","POST"],"AllowHeaders":["content-type"]}'
aws lambda add-permission --function-name CompanyPageHandler \
  --statement-id public-url --action lambda:InvokeFunctionUrl \
  --principal '*' --function-url-auth-type NONE

# Updates
aws lambda update-function-code --function-name CompanyPageHandler --zip-file fileb://function.zip
```

Paste the function URL into `src/config/companyPage.ts`.

## Abuse & cost controls

Generation only happens on cache miss (~$0.005/company at Haiku 4.5 pricing);
cache hits are free. Company/role inputs capped at 80 chars and treated as
untrusted data in the prompt. For a hard ceiling: reserved concurrency
(`aws lambda put-function-concurrency --function-name CompanyPageHandler
--reserved-concurrent-executions 2`) + a monthly spend limit in the Anthropic
Console. Someone scripting fake companies costs ~$5 per thousand pages —
the concurrency cap makes even that slow.
