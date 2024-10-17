import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

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
