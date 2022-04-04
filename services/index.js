import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";

export const DB_PATH = `${process.env.XATA_URL}/db/Linktree:${process.env.XATA_BRANCH}`;

export async function getXataHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.XATA_API_KEY}`,
  };
}

export async function checkAuth() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return;
  }

  router.push("/api/auth/signin");
}
