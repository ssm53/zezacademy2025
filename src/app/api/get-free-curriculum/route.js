import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { fullname, email, whatsapp } = await req.json();

    if (!fullname || !email || !whatsapp) {
      return NextResponse.json(
        { error: "fullname, email and whatsapp are required" },
        { status: 400 }
      );
    }

    // Save to existing StarterPack table
    const lead = await prisma.starterPack.create({
      data: { fullname, email, whatsapp },
    });

    // Notify you by email
    await sendEmailNotification(lead);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("Error creating curriculum lead:", err);
    return NextResponse.json({ error: "Failed to create lead" }, { status: 500 });
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

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: "New Get-Free-Curriculum Lead",
    text: `A new lead requested the curriculum.

Name: ${lead.fullname}
Email: ${lead.email}
WhatsApp: ${lead.whatsapp}

Saved in table: StarterPack.`,
  });
}
