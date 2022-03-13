import React from "react";
import Link from "next/link";
import { getSession } from "next-auth/react";

export default function index() {
  return (
    <div>
      <div>
        <Link href="/settings/profile">Profile</Link>
      </div>
      <div>
        <Link href="/settings/account">Account</Link>
      </div>
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
