import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Induit</title>
        <meta name="description" content="Sriraj Bura's Links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Landing page</p>
        <Link href="/johndoe">johndoe</Link>
        **
        <Link href="/janedoe">janedoe</Link>
      </main>
    </div>
  );
}
