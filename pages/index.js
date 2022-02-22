import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Url from "../components/Url";
export default function Home({ data: { records } }) {
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
          {records.map((link) => {
            return <Url link={link} key={link.id} />;
          })}
        </section>
        <div className={styles.social_icons}></div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  var bodyRaw = {
    columns: ["url", "title"],
  };
  var requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.XATA_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyRaw),
  };

  const res = await fetch(
    "https://open-mpqb7l.xata.sh/db/Linktree:main/tables/Links/query",
    requestOptions
  );

  const data = await res.json();

  return {
    props: { data },
  };
}
