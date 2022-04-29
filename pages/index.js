import Head from "next/head";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { useSession, getSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Induit</title>
        <meta
          name="description"
          content="A simple conduit for all your internet presence"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" mx-auto">
        <div className=" text-center">
          <h1 className="text-2xl md:text-4xl  font-bold p-4 pt-8">
            The Conduit for all your internet presence.
          </h1>
          <Link href="/dashboard">
            <button className="p-4 bg-violet-500 text-white">
              {session ? "Dashboard" : "Sign Up"}
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
