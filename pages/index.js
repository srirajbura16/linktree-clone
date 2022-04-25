import Head from "next/head";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="sm:bg-amber-500">
      <Head>
        <title>Induit</title>
        <meta
          name="description"
          content="A simple conduit for all your internet presence"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white max-w-screen-lg mx-auto">
        <div className=" text-center">
          <h1 className="text-2xl md:text-4xl  font-bold p-4 pt-8">
            The Conduit for all your internet presence.
          </h1>
          <Link href="/api/auth/signin">
            <button className="p-4 bg-violet-500 text-white">Sign Up</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
