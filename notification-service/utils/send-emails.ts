import nodemailer from "nodemailer";
import { NewJobPosting } from "../types";

const userEmail = process.env.EMAIL || "talentiocodingchallenge@gmail.com";
const userPassword = process.env.EMAIL_PASSWORD || "tmqfadpysuefaoja";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: userEmail,
    pass: userPassword,
  },
});

export async function sendEmails(
  emails: string[],
  newJobPosting: NewJobPosting
) {
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
  } catch (error) {
    console.log(error);
  }
}

export default sendEmails;
