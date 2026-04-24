const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send confirmation to user who submitted enquiry
const sendEnquiryConfirmation = async (enquiry) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: enquiry.email,
    subject: "We received your enquiry — Outpro.India 🏆",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #FF4D00; padding: 32px; text-align: center;">
          <h1 style="color: #fff; margin: 0; font-size: 28px; letter-spacing: 2px;">OUTPRO.INDIA</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Sports & Adventure Event Management</p>
        </div>
        <div style="background: #f9f9f9; padding: 32px;">
          <h2 style="color: #0a0a0a;">Hi ${enquiry.name}, we got your enquiry! ✅</h2>
          <p style="color: #555; line-height: 1.7;">
            Thank you for reaching out. Our team will get back to you within <strong>24 hours</strong> with a tailored plan for your event.
          </p>
          <div style="background: #fff; border-left: 4px solid #FF4D00; padding: 20px; margin: 24px 0;">
            <p style="margin: 0 0 8px; font-weight: bold; color: #0a0a0a;">Your Enquiry Summary</p>
            <p style="margin: 4px 0; color: #555;">Event Type: <strong>${enquiry.eventType.replace(/_/g, " ")}</strong></p>
            ${enquiry.sport ? `<p style="margin: 4px 0; color: #555;">Sport: <strong>${enquiry.sport}</strong></p>` : ""}
            ${enquiry.eventDate ? `<p style="margin: 4px 0; color: #555;">Date: <strong>${new Date(enquiry.eventDate).toDateString()}</strong></p>` : ""}
            ${enquiry.eventLocation ? `<p style="margin: 4px 0; color: #555;">Location: <strong>${enquiry.eventLocation}</strong></p>` : ""}
          </div>
          <p style="color: #555; line-height: 1.7;">
            Can't wait? WhatsApp us directly at <a href="https://wa.me/918957239847" style="color: #FF4D00;">+91 89572 39847</a>
          </p>
        </div>
        <div style="background: #0a0a0a; padding: 20px; text-align: center;">
          <p style="color: #666; font-size: 12px; margin: 0;">© 2026 Outpro.India · Jaipur, Rajasthan</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

// Notify admin of new enquiry
const sendAdminNotification = async (enquiry) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_USER,
    subject: `🔔 New Event Enquiry from ${enquiry.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #FF4D00;">New Enquiry Received</h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding:8px; border:1px solid #eee;"><strong>Name</strong></td><td style="padding:8px; border:1px solid #eee;">${enquiry.name}</td></tr>
          <tr><td style="padding:8px; border:1px solid #eee;"><strong>Email</strong></td><td style="padding:8px; border:1px solid #eee;">${enquiry.email}</td></tr>
          <tr><td style="padding:8px; border:1px solid #eee;"><strong>Phone</strong></td><td style="padding:8px; border:1px solid #eee;">${enquiry.phone}</td></tr>
          <tr><td style="padding:8px; border:1px solid #eee;"><strong>Organization</strong></td><td style="padding:8px; border:1px solid #eee;">${enquiry.organization || "—"}</td></tr>
          <tr><td style="padding:8px; border:1px solid #eee;"><strong>Event Type</strong></td><td style="padding:8px; border:1px solid #eee;">${enquiry.eventType}</td></tr>
          <tr><td style="padding:8px; border:1px solid #eee;"><strong>Sport</strong></td><td style="padding:8px; border:1px solid #eee;">${enquiry.sport || "—"}</td></tr>
          <tr><td style="padding:8px; border:1px solid #eee;"><strong>Budget</strong></td><td style="padding:8px; border:1px solid #eee;">${enquiry.budget}</td></tr>
          <tr><td style="padding:8px; border:1px solid #eee;"><strong>Participants</strong></td><td style="padding:8px; border:1px solid #eee;">${enquiry.expectedParticipants || "—"}</td></tr>
          <tr><td style="padding:8px; border:1px solid #eee;"><strong>Event Date</strong></td><td style="padding:8px; border:1px solid #eee;">${enquiry.eventDate ? new Date(enquiry.eventDate).toDateString() : "—"}</td></tr>
          <tr><td style="padding:8px; border:1px solid #eee;"><strong>Location</strong></td><td style="padding:8px; border:1px solid #eee;">${enquiry.eventLocation || "—"}</td></tr>
          <tr><td style="padding:8px; border:1px solid #eee;"><strong>Services</strong></td><td style="padding:8px; border:1px solid #eee;">${enquiry.servicesNeeded?.join(", ") || "—"}</td></tr>
          <tr><td style="padding:8px; border:1px solid #eee;"><strong>Message</strong></td><td style="padding:8px; border:1px solid #eee;">${enquiry.message || "—"}</td></tr>
        </table>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEnquiryConfirmation, sendAdminNotification };
