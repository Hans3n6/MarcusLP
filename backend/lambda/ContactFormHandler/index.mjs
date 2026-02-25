import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "us-east-1" });

export const handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle CORS preflight
  if (event.requestContext?.http?.method === 'OPTIONS' || event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    console.log('Received event:', JSON.stringify(event, null, 2));
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    const { name, email, projectType, message } = body;
    console.log('Parsed form data:', { name, email, projectType });

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      console.log('Validation failed - missing fields');
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Email parameters
    const params = {
      Source: 'Hansen Web Services <noreply@hansenwebservices.com>',
      Destination: {
        ToAddresses: ['marcush1802@gmail.com']
      },
      ReplyToAddresses: [email],
      Message: {
        Subject: {
          Data: `New Contact Form Submission from ${name}`,
          Charset: 'UTF-8'
        },
        Body: {
          Text: {
            Data: `
New contact form submission:

Name: ${name}
Email: ${email}
Project Type: ${projectType}

Message:
${message}

---
Sent from hansenwebservices.com contact form
            `,
            Charset: 'UTF-8'
          },
          Html: {
            Data: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #667eea; }
    .value { margin-top: 5px; }
    .message-box { background: white; padding: 15px; border-left: 4px solid #667eea; margin-top: 10px; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Project Type:</div>
        <div class="value">${projectType}</div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      Sent from hansenwebservices.com contact form
    </div>
  </div>
</body>
</html>
            `,
            Charset: 'UTF-8'
          }
        }
      }
    };

    // Send notification email to Marcus
    const command = new SendEmailCommand(params);
    console.log('Sending notification email to Marcus:', params.Destination.ToAddresses);
    const result = await ses.send(command);
    console.log('Notification email sent:', JSON.stringify(result, null, 2));

    // Send confirmation email to submitter
    const confirmationParams = {
      Source: 'Hansen Web Services <noreply@hansenwebservices.com>',
      Destination: {
        ToAddresses: [email]
      },
      Message: {
        Subject: {
          Data: `Thanks for reaching out, ${name}! 🚀`,
          Charset: 'UTF-8'
        },
        Body: {
          Text: {
            Data: `MESSAGE RECEIVED - Hansen Web Services
═══════════════════════════════════════

Hi ${name},

Thanks for reaching out through my website! I've received your message about ${projectType} and I'm excited to learn more about your project.

WHAT HAPPENS NEXT:
✓ I've received your inquiry
✓ I'll review your message within 24 hours
✓ You'll hear back from me with next steps

In the meantime, feel free to check out my recent work at hansenwebservices.com

Looking forward to connecting!

Best regards,
Marcus Hansen
Web Developer | Waseca, MN

Contact: contact@hansenwebservices.com
Website: hansenwebservices.com

---
Powered by Hansen Web Services`,
            Charset: 'UTF-8'
          },
          Html: {
            Data: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message Received - Hansen Web Services</title>
</head>
<body style="margin:0; padding:0; background-color:#0f172a; font-family: system-ui, -apple-system, sans-serif;">
  <table role="presentation" style="width:100%; border-collapse:collapse;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" style="width:600px; max-width:100%; background:linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border-radius:16px; overflow:hidden; box-shadow:0 20px 60px rgba(0,0,0,0.3);">
          <tr>
            <td style="background:linear-gradient(135deg, #22d3ee 0%, #a855f7 100%); padding:40px 30px; text-align:center;">
              <div style="font-size:48px; margin-bottom:10px;">✓</div>
              <h1 style="margin:0; color:#ffffff; font-size:28px; font-weight:600;">Message Received!</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:40px 30px; color:#e2e8f0;">
              <p style="font-size:18px; line-height:1.6; margin:0 0 20px 0;">
                Hi <strong style="color:#22d3ee;">${name}</strong>,
              </p>
              <p style="font-size:16px; line-height:1.6; margin:0 0 20px 0;">
                Thanks for reaching out through my website! I've received your message about
                <strong style="color:#a855f7;">${projectType}</strong> and I'm excited to learn more about your project.
              </p>
              <div style="background:#1e293b; border-left:4px solid #22d3ee; padding:20px; border-radius:8px; margin:30px 0;">
                <h2 style="margin:0 0 15px 0; color:#22d3ee; font-size:18px;">What happens next:</h2>
                <p style="margin:0 0 8px 0; font-size:15px;">✓ I've received your inquiry</p>
                <p style="margin:0 0 8px 0; font-size:15px;">✓ I'll review your message within 24 hours</p>
                <p style="margin:0; font-size:15px;">✓ You'll hear back from me with next steps</p>
              </div>
              <p style="font-size:16px; line-height:1.6; margin:30px 0 20px 0;">
                In the meantime, feel free to check out my recent work at
                <a href="https://hansenwebservices.com" style="color:#22d3ee; text-decoration:none;">hansenwebservices.com</a>
              </p>
              <p style="font-size:16px; line-height:1.6; margin:30px 0 0 0;">
                Looking forward to connecting!
              </p>
              <p style="font-size:16px; line-height:1.6; margin:20px 0 0 0;">
                Best regards,<br>
                <strong style="color:#ffffff;">Marcus Hansen</strong><br>
                <span style="color:#94a3b8;">Web Developer | Waseca, MN</span>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#0f172a; padding:30px; text-align:center; border-top:1px solid #1e293b;">
              <p style="margin:0 0 10px 0; color:#64748b; font-size:14px;">
                <a href="mailto:contact@hansenwebservices.com" style="color:#22d3ee; text-decoration:none;">contact@hansenwebservices.com</a>
              </p>
              <p style="margin:0 0 15px 0; color:#64748b; font-size:14px;">
                <a href="https://hansenwebservices.com" style="color:#a855f7; text-decoration:none;">hansenwebservices.com</a>
              </p>
              <p style="margin:0; color:#475569; font-size:12px;">
                Powered by Hansen Web Services
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
            Charset: 'UTF-8'
          }
        }
      }
    };

    const confirmationCommand = new SendEmailCommand(confirmationParams);
    console.log('Sending confirmation email to:', email);
    const confirmationResult = await ses.send(confirmationCommand);
    console.log('Confirmation email sent:', JSON.stringify(confirmationResult, null, 2));

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Email sent successfully'
      })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to send email',
        details: error.message
      })
    };
  }
};
