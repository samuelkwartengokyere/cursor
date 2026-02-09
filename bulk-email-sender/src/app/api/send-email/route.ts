
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const { subject, message } = await request.json();

        if (!subject || !message) {
            return NextResponse.json(
                { error: "Subject and message are required" },
                { status: 400 }
            );
        }

        // specific: Fetch all contacts with email addresses
        const contacts = await prisma.contact.findMany({
            where: {
                email: {
                    not: "",
                },
            },
            select: {
                email: true,
            },
        });

        if (contacts.length === 0) {
            return NextResponse.json(
                { error: "No contacts found to send email to" },
                { status: 404 }
            );
        }

        const recipientEmails = contacts.map((contact: { email: string }) => contact.email).join(",");

        // specific: Create Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // specific: Configure email options
        const mailOptions = {
            from: process.env.SMTP_FROM_EMAIL,
            to: recipientEmails, // Send to all recipients in the 'to' field (visible to all) - OR use 'bcc' for privacy
            // to: process.env.SMTP_FROM_EMAIL, // Send to self
            // bcc: recipientEmails, // Blind copy all contacts
            subject: subject,
            text: message,
            // html: <p>${message}</p>, // You can add HTML support later
        };

        // specific: Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Emails sent successfully" });

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send emails" },
            { status: 500 }
        );
    }
}
