# Contact Form Handler Lambda Function

This Lambda function handles contact form submissions from the Hansen Web Services website.

## Functionality

1. **Receives form submissions** from the website contact form
2. **Sends notification email** to Marcus with the inquiry details
3. **Sends confirmation email** to the submitter
4. **Handles CORS** for cross-origin requests

## Configuration

- **Function Name:** `ContactFormHandler`
- **Runtime:** Node.js 20.x
- **Region:** us-east-1
- **Handler:** index.handler
- **Memory:** 128 MB
- **Timeout:** 10 seconds

## Email Settings

### Source Addresses
- **From:** `Hansen Web Services <noreply@hansenwebservices.com>`
- **To (Notifications):** `marcush1802@gmail.com`
- **Reply-To:** Submitter's email address

### Email Types
1. **Notification Email:** Sent to Marcus with form submission details (HTML formatted)
2. **Confirmation Email:** Sent to submitter acknowledging receipt (beautifully styled HTML)

## AWS Services Used

- **AWS Lambda:** Serverless function execution
- **AWS SES:** Email delivery service
- **CloudWatch Logs:** Function logging at `/aws/lambda/ContactFormHandler`

## Deployment

### Deploy Updated Function
```bash
# Package the function
cd backend/lambda/ContactFormHandler
zip -r ContactFormHandler.zip .

# Deploy to AWS
aws lambda update-function-code \
  --function-name ContactFormHandler \
  --zip-file fileb://ContactFormHandler.zip \
  --region us-east-1
```

### View Logs
```bash
# Tail logs in real-time
aws logs tail /aws/lambda/ContactFormHandler --follow --region us-east-1

# View recent logs
aws logs tail /aws/lambda/ContactFormHandler --since 1h --region us-east-1
```

## Form Fields

Required fields from the contact form:
- `name` - Visitor's name
- `email` - Visitor's email address
- `projectType` - Type of project (e.g., "Landing Page", "E-commerce")
- `message` - Project description

## Recent Updates

**January 19, 2026**
- Updated email source from `marcush1802@gmail.com` to `Hansen Web Services <noreply@hansenwebservices.com>`
- Updated contact email in confirmation template from Gmail to `contact@hansenwebservices.com`
- Improved professional branding with custom domain

## Environment

- **SES Sandbox Mode:** Currently in sandbox (verified addresses only)
- **Domain:** `hansenwebservices.com` (verified in SES)
- **Verified Emails:**
  - `marcush1802hansen@gmail.com`
  - Domain-wide: `*@hansenwebservices.com`

## Next Steps

To accept emails from any visitor (not just verified addresses):
1. Request production access for SES
2. Go to AWS Console → SES → Account dashboard
3. Submit production access request
4. Usually approved within 24-48 hours
