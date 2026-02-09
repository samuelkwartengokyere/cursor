
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> } // params is a Promise in Next.js 15+
) {
    try {
        const { id } = await params;
        const contactId = parseInt(id);

        await prisma.contact.delete({
            where: { id: contactId },
        });

        return NextResponse.json({ message: "Contact deleted successfully" });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete contact" },
            { status: 500 }
        );
    }
}
