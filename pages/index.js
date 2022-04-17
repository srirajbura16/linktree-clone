import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Induit</title>
        <meta
          name="description"
          content="A simple conduit for all your internet presence"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="text-2xl  md:text-4xl text-center font-bold">
          The Conduit for all your internet presence.
        </h1>
      </main>
    </div>
  );
}
