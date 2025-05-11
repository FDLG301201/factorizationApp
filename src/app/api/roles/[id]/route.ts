import { prisma } from '../../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
    _req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const role = await prisma.roles.findUnique({
            where: { id: parseInt(params.id) }
        });

        if (!role) {
            return NextResponse.json({ error: 'Role not found' }, { status: 404 });
        }

        return NextResponse.json(role);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const data = await req.json();
        const updated = await prisma.roles.update({
            where: { id: parseInt(params.id) },
            data
        });

        return NextResponse.json(updated);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function DELETE(
    _req: Request,
    { params }: { params: { id: string } }
) {
    try {
        await prisma.roles.delete({
            where: { id: parseInt(params.id) }
        });

        return NextResponse.json({ message: 'Role deleted' });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

