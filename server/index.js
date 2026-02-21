const express = require('express');
const cors = require('cors');
require('dotenv').config();
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from server! Server is UP.');
});

// Diagnostic route to test email config
app.get('/api/test-email', async (req, res) => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  res.json({
    hasUser: !!emailUser,
    userPrefix: emailUser ? emailUser.substring(0, 5) : 'none',
    hasPass: !!emailPass,
    port: process.env.PORT || 'default'
  });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form received:', { name, email, message });

  const resendApiKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.EMAIL_TO || 'jarbouiachraf899@gmail.com';

  if (resendApiKey) {
    console.log('🚀 Production Mailer: Sending via Resend API...');

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          from: 'Portfolio <onboarding@resend.dev>', // Default for free accounts
          to: emailTo,
          subject: `🚀 Portfolio Message from ${name}`,
          reply_to: email,
          html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
              <h2 style="color: #2563eb;">New Portfolio Message</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;"/>
              <p style="white-space: pre-wrap; color: #374151;">${message}</p>
            </div>
          `
        })
      });

      const result = await response.json();

      if (response.ok) {
        console.log('✅ Email sent via Resend:', result.id);
        return res.json({ success: true, message: 'Message sent successfully!' });
      } else {
        console.error('❌ Resend API Error:', result);
        throw new Error(result.message || 'API rejected request');
      }

    } catch (error) {
      console.error('❌ Mailer Error Detail:', error.message);
      return res.status(500).json({
        success: false,
        message: 'The email service failed.',
        details: error.message
      });
    }
  } else {
    console.error('⚠️ Configuration Error: RESEND_API_KEY missing on Render.');
    return res.status(400).json({ success: false, message: 'Email API key is not configured.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
