import nodemailer from "nodemailer";
import { NewJobPosting } from "../types";

const userEmail = process.env.EMAIL || "";
const userPassword = process.env.EMAIL_PASSWORD || "";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: userEmail,
    pass: userPassword,
  },
});

/**
 * Send emails to subscribers notifying them about a new job posting.
 *
 * @export
 * @param {string[]} emails
 * @param {NewJobPosting} newJobPosting
 * @returns {Promise<void>}
 */
export async function sendEmails(
  emails: string[],
  newJobPosting: NewJobPosting
): Promise<void> {
  if (emails.length === 0) {
    console.log("No emails to send");
    return;
  }
  try {
    await transporter.sendMail({
      from: userEmail,
      to: emails,
      subject: "New job posting!",
      html: `
      <h1>New job posting!</h1>
      <p>There is a new job posting that matches your notification criteria.</p>
      <h2>Job posting details:</h2>
      <p>Job title: <strong>${newJobPosting?.title || "Title"}</strong></p>
      <p>Location: <strong>${newJobPosting?.city || "City"}</strong></p>
      `,
    });
    console.log("Email(s) sent!");
    return;
  } catch (error) {
    console.log("Email not sent", error);
    return;
  }
}

export default sendEmails;
