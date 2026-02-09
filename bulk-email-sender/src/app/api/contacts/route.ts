
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET: Fetch all contacts
export async function GET() {
    try {
        const contacts = await prisma.contact.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(contacts);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch contacts" },
            { status: 500 }
        );
    }
}

// POST: Add a new contact
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone } = body;

        if (!name || !email) {
            return NextResponse.json(
                { error: "Name and Email are required" },
                { status: 400 }
            );
        }

        const newContact = await prisma.contact.create({
            data: {
                name,
                email,
                phone,
            },
        });

        return NextResponse.json(newContact, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create contact" },
            { status: 500 }
        );
    }
}
