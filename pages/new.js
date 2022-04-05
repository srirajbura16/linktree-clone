import React, { useEffect } from "react";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getXataHeaders, DB_PATH } from "../services";

export default function New() {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session, "FROM NEW PAGE");

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/api/auth/signin");
  }

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

    router.push(`/srirajbura`);
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
