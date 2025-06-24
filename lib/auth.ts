import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "./prisma";

// Obtiene la sesión del usuario autenticado
export async function getSession() {
  return await getServerSession();
}

// Obtiene el usuario autenticado completo desde la base de datos
export async function getCurrentUser() {
  const session = await getSession();
  
  if (!session?.user?.email) {
    return null;
  }

  const user = await prisma.users.findUnique({
    where: {
      email: session.user.email,
    },
  });

  return user;
}

// Middleware para verificar autenticación
export async function authMiddleware(req: NextRequest) {
  const user = await getCurrentUser();
  
  if (!user) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }
  
  return user;
}
