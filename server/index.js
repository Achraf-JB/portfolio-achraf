const express = require('express');
const cors = require('cors');
require('dotenv').config();
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from server!');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form received:', { name, email, message });

  // Sanitize inputs (automatic space removal for App Passwords)
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s/g, '') : null;

  if (emailUser && emailPass && !emailUser.includes('your-email')) {
    console.log(`🚀 Production Mailer: Connecting as ${emailUser} via Port 587...`);

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      tls: {
        rejectUnauthorized: false
      },
      connectionTimeout: 30000,
      greetingTimeout: 30000,
      socketTimeout: 30000
    });

    try {
      console.log('📡 Verifying SMTP connection (Port 587)...');
      await transporter.verify();

      console.log('📤 Sending mail...');
      const info = await transporter.sendMail({
        from: `"${name}" <${emailUser}>`,
        to: emailUser,
        subject: `🚀 Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #2563eb;">New Portfolio Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;"/>
            <p style="white-space: pre-wrap; color: #374151;">${message}</p>
          </div>
        `
      });

      console.log('✅ Email sent successfully:', info.messageId);
      return res.json({ success: true, message: 'Message sent successfully!' });

    } catch (error) {
      console.error('❌ Mailer Error Detail:', error);
      return res.status(500).json({
        success: false,
        message: 'Gmail connection timed out or was rejected.',
        details: error.message,
        code: error.code
      });
    }
  } else {
    console.error('⚠️ Configuration Error: Missing EMAIL_USER or EMAIL_PASS on the server.');
    return res.status(400).json({ success: false, message: 'Server email credentials are not configured in environment variables.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
