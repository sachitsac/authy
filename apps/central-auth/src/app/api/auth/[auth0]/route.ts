import {
  Session,
  handleAuth,
  handleLogin,
  handleCallback,
} from "@auth0/nextjs-auth0";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

const afterCallback = async (req: NextRequest, session: Session) => {
  try {
    await prisma.user.upsert({
      where: { email: session.user.email },
      create: {
        auth0Id: session.user.sub,
        email: session.user.email,
        lastSeen: new Date().toISOString(),
      },
      update: {
        lastSeen: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("User already exists", error);
  }
  return session;
};

export const GET = handleAuth({
  callback: handleCallback({ afterCallback }),
  login: handleLogin({
    returnTo: "/dashboard",
  }),
});
