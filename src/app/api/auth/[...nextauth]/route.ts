import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from '../../../../../lib/prisma';
import bcrypt from "bcryptjs";

const handler = NextAuth({
    providers: [
      CredentialsProvider({
      
        name: 'Credentials',
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const user = await prisma.users.findUnique({
            where: { username: credentials?.username }
          });

          if (!user) {
            return null;
          }

          if (!credentials?.password) {
            return null;
          }

          const isValid = await bcrypt.compare(credentials.password, user.password);

          if (!isValid) {
            return null;
          }

          const { password, ...userWithoutPassword } = user;
          return {
            ...userWithoutPassword,
            id: String(user.id),
          };

        }
      })
      ],
      session: { strategy: "jwt" },
      callbacks: {
        async jwt({ token, user }) {
          if (user && "username" in user) {
            token.username = (user as any).username;
          }
          return token;
        },
        async session({ session, token }) {
          if (session.user && token.username) {
            (session.user as any).username = token.username as string;
          }
          return session;
        }
      }
})

export { handler as GET, handler as POST }