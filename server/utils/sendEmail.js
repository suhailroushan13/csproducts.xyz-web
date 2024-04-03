import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import config from "config";

const USER = config.get("USER");
const PASS = config.get("PASS");

async function sendMail(
  recipients,
  subject,
  textBody,
  htmlBody,
  attachments,
  cc = [],
  replyTo = ""
) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: USER,
      pass: PASS,
    },
  });

  let successRecipients = [];
  let failureRecipients = [];

  for (const recipient of recipients) {
    try {
      let mailOptions = {
        from: `"Suhail Email Service's" <${USER}>`,
        to: recipient,
        cc: cc, // Added CC
        replyTo: replyTo, // Added replyTo
        subject: subject,
        text: textBody, // Plain text body
        html: htmlBody, // HTML body
      };

      // Add attachments to the mailOptions if they exist
      if (attachments && attachments.length > 0) {
        mailOptions.attachments = attachments.map((file) => ({ path: file }));
      }

      let info = await transporter.sendMail(mailOptions);
      console.log("Email sent to %s: %s", recipient, info.messageId);
      successRecipients.push(recipient);
    } catch (error) {
      console.error("Error sending email to %s: ", recipient, error);
      failureRecipients.push(recipient);
    }
  }

  return { successRecipients, failureRecipients };
}

export default sendMail;
