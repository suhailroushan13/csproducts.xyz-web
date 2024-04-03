import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    recipients: {
      type: [String], // Array of strings for email addresses
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    htmlBody: {
      // Corrected field name
      type: String,
    },
    textBody: {
      type: String,
    },
    attachments: {
      type: [String], // Array of strings for file paths or URLs
      required: false,
    },
    cc: {
      type: [String], // Array of strings for CC email addresses
      required: false,
    },
    replyTo: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const Email = mongoose.model("Email", emailSchema, "emails");

export default Email;
