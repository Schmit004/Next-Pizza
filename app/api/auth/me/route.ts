import { prisma } from '@/prisma/prisma-client';
import { authOptions } from '@/constants/auth-options';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import { IncomingMessage, ServerResponse } from 'http';

export const dynamic = 'force-dynamic';

export async function GET(req: IncomingMessage & { cookies: Partial<{[key: string]: string}> }, res: ServerResponse) {
  try {
    const user = await getServerSession(req, res, authOptions);

    if (!user) {
      return NextResponse.json({ message: 'Вы не авторизованы' }, { status: 401 });
    }

    const data = await prisma.user.findUnique({
      where: {
        id: Number(user.user.id),
      },
      select: {
        fullName: true,
        email: true,
        password: false,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: '[USER_GET] Server error' }, { status: 500 });
  }
}
