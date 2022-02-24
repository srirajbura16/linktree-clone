import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Url from "../components/Url";
export default function Home({ data: { records } }) {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  console.log(records);

  const img = `https://picsum.photos/${randomIntFromInterval(
    200,
    800
  )}/${randomIntFromInterval(200, 800)}`;
  return (
    <div className={styles.container}>
      <Head>
        <title>Induit</title>
        <meta name="description" content="Sriraj Bura's Links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/johndoe">johndoe</Link>
        <Link href="/janedoe">janedoe</Link>
      </main>
    </div>
  );
}
