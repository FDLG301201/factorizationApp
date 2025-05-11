import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from '../../../../../lib/prisma';
import bcrypt from "bcryptjs";

const handler = NextAuth({
    providers: [
      CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          // (i.e., the request IP address)

          const user = await prisma.users.findUnique({
            where: { username: credentials?.username }
          });

          // Si no existe el usuario
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
            id: String(user.id), // <-- Forzar id a string
          };

        }
      })
      ],
      session: { strategy: "jwt" },
      callbacks: {
        async jwt({ token, user }) {
          // Cuando el usuario inicia sesión, agrega username al token
          if (user && "username" in user) {
            token.username = (user as any).username;
          }
          return token;
        },
        async session({ session, token }) {
          // Pasa el username del token a la sesión
          if (session.user && token.username) {
            (session.user as any).username = token.username as string;
          }
          return session;
        }
      }
})

export { handler as GET, handler as POST }