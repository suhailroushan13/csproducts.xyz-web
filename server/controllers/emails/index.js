import express from "express";
import Email from "../../models/Email.js"; // Import the schema/model we created
import sendMail from "../../utils/sendEmail.js";
import mongoose from "mongoose";

const router = express.Router();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.get("/getall", async (req, res) => {
  try {
    const emails = await Email.find();
        res.status(200).json(emails);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Failed to retrieve emails",
      details: error.message,
    });
  }
});

router.post("/send", async (req, res) => {
  try {
    const {
      recipients,
      subject,
      textBody,
      htmlBody,
      attachments,
      cc,
      replyTo,
    } = req.body;

    // Validate recipients' email addresses
    const areValidEmails = recipients.every((email) => emailRegex.test(email));

    if (!areValidEmails) {
      return res
        .status(400)
        .send({ error: "Please provide valid email addresses" });
    }

    // Save the email data to the database
    const email = new Email({
      recipients,
      subject,
      textBody,
      htmlBody,
      attachments,
      cc,
      replyTo,
    });

    await email.save();

    // Send the email
    const { successRecipients, failureRecipients } = await sendMail(
      recipients,
      subject,
      textBody,
      htmlBody,
      attachments,
      cc,
      replyTo
    );

    res.status(200).send({
      message: "Emails sent successfully",
      successRecipients,
      failureRecipients,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Failed to send emails or save email data",
      details: error.message,
    });
  }
});

export default router;
