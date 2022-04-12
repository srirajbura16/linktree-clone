import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Avatar from "../components/Avatar";
export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="mx-auto text-center my-4 text-2xl">
      <Head>
        <title>Induit</title>
        <meta
          name="description"
          content="A simple conduit for all your internet presence"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div>
          {status === "authenticated" ? (
            <div>
              <Avatar image={session.user.image} />
              <p>Signed in as {session.user.name}</p>
              <p>{session.user.email}</p>
            </div>
          ) : (
            <div>
              <p>Landing page</p>
              <Link href="/johndoe">johndoe</Link>
              **
              <Link href="/janedoe">janedoe</Link>
              <div>
                <Link href="/api/auth/signin">Login</Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
