import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';
import bcrypt from "bcryptjs";

export function GET() {
    try {
        const users = prisma.users.findMany();
        return NextResponse.json(users);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        const user = await prisma.users.create({ data });
        return NextResponse.json(user, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}