import React, { useEffect } from "react";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getXataHeaders, DB_PATH } from "../services";

export default function New() {
  const { data: session } = useSession();
  const router = useRouter();

  const createLink = async (event) => {
    event.preventDefault();

    const { title, url } = event.target;

    const res = await fetch("/api/create-link", {
      body: JSON.stringify({
        title: title.value,
        url: url.value,
        userID: session.user.id,
      }),
      headers: {
        ...(await getXataHeaders()),
      },
      method: "POST",
    });

    router.push(`/`);
  };

  return (
    <div>
      <form onSubmit={createLink} method="post">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="url">Url</label>
          <input
            type="url"
            id="url"
            name="url"
            placeholder="https://example.com"
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
