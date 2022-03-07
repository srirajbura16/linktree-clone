import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div className={styles.container}>
      <Head>
        <title>Induit</title>
        <meta
          name="description"
          content="A simple conduit for all your internet presence"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Landing page</p>
        <Link href="/johndoe">johndoe</Link>
        **
        <Link href="/janedoe">janedoe</Link>
        <div>
          {status === "authenticated" ? (
            <p>Signed in as {session.user.name}</p>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </div>
      </main>
    </div>
  );
}
