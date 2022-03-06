import Head from "next/head";
import styles from "../styles/Home.module.css";
import Url from "../components/Url";
import { getXataHeaders, DB_PATH } from "../services";
console.log(DB_PATH);

export default function Username({ data: { records } }) {
  console.log(records, "from component");
  const { name, photo, description } = records[0].user;

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
          style={{ backgroundImage: `url(${photo})` }}
        />
        <section>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.description}>{description}</p>
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

export async function getStaticProps({ params }) {
  var bodyRaw = {
    columns: ["url", "title", "user.*"],
    filter: {
      "user.username": `${params.username}`,
    },
  };
  var requestOptions = {
    method: "POST",
    headers: {
      ...(await getXataHeaders()),
    },
    body: JSON.stringify(bodyRaw),
  };

  const res = await fetch(`${DB_PATH}/tables/Links/query`, requestOptions);

  const data = await res.json();
  console.log(data, "from paths");

  return {
    props: { data },

    revalidate: 10,
  };
}

export async function getStaticPaths() {
  var bodyRaw = { columns: ["username"] };
  var requestOptions = {
    method: "POST",
    headers: {
      ...(await getXataHeaders()),
    },
    body: JSON.stringify(bodyRaw),
  };

  const res = await fetch(`${DB_PATH}/tables/Users/query`, requestOptions);

  const users = await res.json();

  const paths = users.records.map((user) => ({
    params: { username: user.username },
  }));

  return { paths, fallback: "blocking" };
}
