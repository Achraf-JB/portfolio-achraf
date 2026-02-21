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

  // Example using nodemailer
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (emailUser && emailPass && !emailUser.includes('your-email')) {
    console.log('🚀 Production Mailer: Attempting connection via Gmail service...');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      }
    });

    try {
      // Verify connection configuration
      await transporter.verify();
      console.log('📡 Transporter is ready to take our messages');

      console.log('📤 Sending mail to:', emailUser);
      const info = await transporter.sendMail({
        from: `"${name}" <${emailUser}>`,
        to: emailUser,
        subject: `Portfolio Contact: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`
      });
      console.log('✅ Email sent successfully:', info.messageId);
      return res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
      console.error('❌ Nodemailer Error Detail:', error);
      return res.status(500).json({
        success: false,
        message: 'Email service failure',
        error: error.message,
        code: error.code
      });
    }
  } else {
    console.log('Skipping email send: No valid credentials provided in .env');
    return res.status(400).json({ success: false, message: 'Server email not configured' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
