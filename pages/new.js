import React, { useEffect } from "react";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function New() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/api/auth/signin");
  }
  return (
    <div>
      <ul>
        <li>[*]check logged in or redirect</li>
        <li>create links when logged in(form)</li>
      </ul>
    </div>
  );
}
