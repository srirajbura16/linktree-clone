import Head from "next/head";
import styles from "../styles/Home.module.css";
import Url from "../components/Url";
import { getXataHeaders, DB_PATH } from "../services";

export default function Username({ user, links }) {
  const { name, photo, description } = user.records[0];

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
          {links.records.map((link) => {
            return <Url link={link} key={link.id} />;
          })}
        </section>
        <div className={styles.social_icons}></div>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  var userBodyRaw = {
    columns: ["*"],
    filter: {
      username: `${params.username}`,
    },
  };

  const user_res = await fetch(`${DB_PATH}/tables/Users/query`, {
    method: "POST",
    headers: {
      ...(await getXataHeaders()),
    },
    body: JSON.stringify(userBodyRaw),
  });
  const user = await user_res.json();
  const userId = user.records[0].id;

  var linksBodyRaw = {
    columns: ["*"],
    filter: {
      "user.id": userId,
    },
  };

  const links_res = await fetch(`${DB_PATH}/tables/Links/query`, {
    method: "POST",
    headers: {
      ...(await getXataHeaders()),
    },
    body: JSON.stringify(linksBodyRaw),
  });
  const links = await links_res.json();
  return {
    props: { user, links },

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
