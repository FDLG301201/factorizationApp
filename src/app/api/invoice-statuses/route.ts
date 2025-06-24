import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const statuses = await prisma.invoice_statuses.findMany();
        return NextResponse.json(statuses);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// export async function POST(req: Request) {
//     try {
//         const data = await req.json();
//         const status = await prisma.invoice_statuses.create({ data });
//         return NextResponse.json(status, { status: 201 });
//     } catch (error: any) {
//         return NextResponse.json({ error: error.message }, { status: 400 });
//     }
// }