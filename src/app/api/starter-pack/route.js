
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullname, email, whatsapp } = body;

    if (!email || !fullname || !whatsapp) {
      return NextResponse.json(
        { error: "fullname, email and whatsapp are required" },
        { status: 400 }
      );
    }

    const lead = await prisma.starterPack.create({
      data: { fullname, email, whatsapp },
    });

    await sendEmailNotification(lead);

    return NextResponse.json({ lead }, { status: 201 });
  } catch (error) {
    console.error("Error creating starter pack lead:", error);
    return NextResponse.json(
      { error: "Failed to create lead" },
      { status: 500 }
    );
  }
}

async function sendEmailNotification(lead) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: "New Starter Pack Lead",
    text: `A new starter pack lead has been captured.

Name: ${lead.fullname}
Email: ${lead.email}
WhatsApp: ${lead.whatsapp}

Check the StarterPack table for details.`,
  };

  await transporter.sendMail(mailOptions);
}
