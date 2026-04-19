// emailConfig.js
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "bowlapple53@gmail.com",
    pass: "osnl weli kzsn levx"
  }
});
