

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    // Parse the incoming request data
    const body = await req.json();

    // Destructure the data from the body
    const {
      fullname,
      email,
      whatsapp,
      reason,
      codingexperience,
      stageofcareer,
      fullorpart,
      remoteoronsite,
    } = body;

    // Create a new applicant in the database
    const newApplicant = await prisma.applicant.create({
      data: {
        fullname,
        email,
        whatsapp,
        reason,
        codingexperience,
        stageofcareer,
        fullorpart,
        remoteoronsite,
      },
    });

    // Send an email notification to yourself
    await sendEmailNotification(newApplicant);

    // Return a success response with the created applicant
    return NextResponse.json({ applicant: newApplicant }, { status: 201 });
  } catch (error) {
    console.error("Error creating applicant:", error);
    return NextResponse.json(
      { error: "Failed to create applicant" },
      { status: 500 }
    );
  }
}

// Function to send an email notification using Nodemailer
async function sendEmailNotification(applicant) {
  // Create a transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Set up email options
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: "New Bootcamp Application Received",
    text: `A new student has applied for the bootcamp.

Name: ${applicant.fullname}
Email: ${applicant.email}
Whatsapp: ${applicant.whatsapp}
Reason: ${applicant.reason}
Coding Experience: ${applicant.codingexperience}
Stage of Career: ${applicant.stageofcareer}
Schedule: ${applicant.fullorpart}
Location Preference: ${applicant.remoteoronsite}

Please review the application in the database.`,
  };

  // Send the email
  await transporter.sendMail(mailOptions);
}
