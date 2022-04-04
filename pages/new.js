import React, { useEffect } from "react";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function New() {
  const { data: session, status } = useSession();
  console.log(session);
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/api/auth/signin");
  }

  return (
    <div>
      <form action="/api/create-link" method="post">
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
