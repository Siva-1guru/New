const cron = require('node-cron');
const Reminder = require('../models/Reminder');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const { EMAIL_USER, EMAIL_PASS, TWILIO_SID, TWILIO_AUTH_TOKEN } = process.env;

// Setup Twilio for WhatsApp
const twilioClient = new twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

// Setup Nodemailer for email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Cron Job to send reminders
cron.schedule('* * * * *', async () => {
  const now = new Date();
  const leads = await Reminder.find({ 'reminder.time': { $lte: now }, 'reminder.sent': false });

  leads.forEach(async (lead) => {
    // Modify the reminder message to include lead's name
    const reminderMessage = `Hi ${lead.name}, ${lead.reminder.message}`;

    if (lead.reminder.channel === 'whatsapp') {
      // Send WhatsApp via Twilio
      await twilioClient.messages.create({
        body: reminderMessage,
        from: 'whatsapp:+14155238886',  // Twilio WhatsApp Sandbox Number
        to: `whatsapp:${lead.phone}`,
      });
    } else if (lead.reminder.channel === 'email') {
      // Send email via Nodemailer
      const mailOptions = {
        from: EMAIL_USER,
        to: lead.email,
        subject: 'Reminder from CRM',
        text: reminderMessage,
      };
      await transporter.sendMail(mailOptions);
    }

    // Mark reminder as sent
    lead.reminder.sent = true;
    await lead.save();
  });
});
