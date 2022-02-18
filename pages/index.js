import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const img = `https://picsum.photos/${randomIntFromInterval(
    200,
    800
  )}/${randomIntFromInterval(200, 800)}`;
  return (
    <div className={styles.container}>
      <Head>
        <title>John Doe</title>
        <meta name="description" content="Sriraj Bura's Links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <figure
          className={styles.avatar}
          style={{ backgroundImage: `url(${img})` }}
        />
        <section>
          <h2 className={styles.name}>John Doe</h2>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
            libero.
          </p>
        </section>
        <section className={styles.links}>
          <Link href="https://twitter.com/SrirajBura">
            <a className={styles.link}>Twitter</a>
          </Link>
          <Link href="https://github.com/srirajbura16">
            <a className={styles.link}>Github</a>
          </Link>
          <Link href="https://www.linkedin.com/in/srirajbura/">
            <a className={styles.link}>Linkedin</a>
          </Link>
        </section>

        <div className={styles.social_icons}></div>
      </main>
    </div>
  );
}
