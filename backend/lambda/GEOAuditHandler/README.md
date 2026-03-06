# GEO Audit Handler - AWS Lambda Function

Analyzes any website for Generative Engine Optimization (GEO) readiness. Scores pages across 4 categories (0-100 total) and optionally captures lead emails via SES notification.

## Deployment Steps (AWS Console)

### 1. Create the Lambda Function

1. Go to **AWS Lambda** in the AWS Console (us-east-1 region)
2. Click **Create function** > **Author from scratch**
3. Configure:
   - **Function name:** `GEOAuditHandler`
   - **Runtime:** Node.js 20.x
   - **Architecture:** x86_64
   - **Execution role:** Create a new role with basic Lambda permissions
4. Click **Create function**

### 2. Add the Code

1. In the **Code** tab, delete the default `index.mjs`
2. Copy the entire contents of `index.mjs` from this folder
3. Paste into the Lambda code editor
4. Click **Deploy**

### 3. Configure Function Settings

1. Go to **Configuration** > **General configuration** > **Edit**
   - **Memory:** 256 MB
   - **Timeout:** 30 seconds (needs time to fetch external pages)
   - **Ephemeral storage:** 512 MB (default)
2. Click **Save**

### 4. Add SES Permissions

The function needs permission to send emails via SES for lead notifications.

1. Go to **Configuration** > **Permissions**
2. Click on the **Execution role** link
3. In IAM, click **Add permissions** > **Attach policies**
4. Search for and attach: `AmazonSESFullAccess` (or create a custom policy below)

**Custom policy (least privilege):**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "ses:SendEmail",
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "ses:FromAddress": "noreply@hansenwebservices.com"
        }
      }
    }
  ]
}
```

### 5. Create Function URL (or API Gateway)

**Option A: Function URL (simplest)**
1. Go to **Configuration** > **Function URL**
2. Click **Create function URL**
3. Auth type: **NONE** (public access - CORS handles security)
4. Configure CORS:
   - Allow origin: `*`
   - Allow methods: `POST, OPTIONS`
   - Allow headers: `Content-Type`
5. Click **Save**
6. Copy the Function URL for use in the frontend

**Option B: API Gateway**
1. Go to **API Gateway** > **Create API** > **HTTP API**
2. Add integration: Lambda > `GEOAuditHandler`
3. Configure route: `POST /audit`
4. Deploy and copy the invoke URL

### 6. Test the Function

Use the **Test** tab in Lambda console with this event:

```json
{
  "requestContext": {
    "http": {
      "method": "POST",
      "sourceIp": "127.0.0.1"
    }
  },
  "body": "{\"url\": \"https://hansenwebservices.com\", \"email\": \"test@example.com\"}"
}
```

Expected response: HTTP 200 with JSON containing `overallScore`, `grade`, and `categories`.

## API Reference

### POST /audit

**Request body:**
```json
{
  "url": "https://example.com",
  "email": "optional@example.com"
}
```

- `url` (required): The website URL to audit. Protocol is added automatically if missing.
- `email` (optional): If provided, a lead notification is sent to marcush1802@gmail.com via SES.

**Response (200):**
```json
{
  "success": true,
  "url": "https://example.com",
  "timestamp": "2026-03-04T12:00:00.000Z",
  "overallScore": 72,
  "grade": "B",
  "categories": {
    "schemaMarkup": { "score": 18, "maxScore": 25, "label": "Schema Markup", "findings": [...] },
    "metaTags": { "score": 20, "maxScore": 25, "label": "Meta Tags & SEO", "findings": [...] },
    "contentStructure": { "score": 19, "maxScore": 25, "label": "Content Structure", "findings": [...] },
    "aiAccessibility": { "score": 15, "maxScore": 25, "label": "AI Accessibility", "findings": [...] }
  },
  "topRecommendations": [
    "Add Organization JSON-LD...",
    "Allow GPTBot in robots.txt..."
  ]
}
```

**Error responses:**
- `400` - Invalid URL or email format
- `429` - Rate limit exceeded (5 requests per IP per hour)
- `500` - Unexpected server error

## Scoring Categories

| Category | Max Points | What It Checks |
|----------|-----------|----------------|
| Schema Markup | 25 | JSON-LD, Organization, Article/Author, BreadcrumbList |
| Meta Tags & SEO | 25 | Title, description, Open Graph, canonical URL |
| Content Structure | 25 | Headings, word count, lists/tables, internal links |
| AI Accessibility | 25 | robots.txt AI bots, sitemap, page load, semantic HTML |

**Grade scale:** A (90-100), B+ (80-89), B (70-79), C+ (60-69), C (50-59), D (0-49)

## Rate Limiting

- 5 requests per IP per hour
- In-memory storage (resets on Lambda cold start)
- Returns HTTP 429 when exceeded

## Dependencies

None -- uses only built-in Node.js modules (`https`, `http`) plus the AWS SDK v3 SES client (included in the Lambda runtime).

## Cost Estimate

Minimal. Each invocation uses ~256 MB for ~5-10 seconds. At 1,000 audits/month:
- Lambda: ~$0.05
- SES: ~$0.001 per lead email
- Total: Under $1/month
