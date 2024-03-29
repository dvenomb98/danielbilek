import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message, company } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'danybilek@gmail.com',
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: email,
    to: 'danielbilek98@seznam.cz',
    subject: `danielbilek.cz: Nová zpráva od: ${name} - ${company}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: `Failed to send email: ${error}` });
  }
}
