import { useSession } from "next-auth/react";
import Link from "next/link";

export default function DashBoardLayout({ children }) {
  const { data: session } = useSession();
  return (
    <div className=" max-w-4xl mx-auto p-4">
      <div className="bg-slate-300 text-center p-2 ">
        <Link href="/dashboard">Home</Link> -{"  "}
        <Link href="/dashboard/new">New</Link> -{"  "}
        {session ? (
          <Link href={`/${session.user.username}`}>
            {session.user.username}
          </Link>
        ) : (
          ""
        )}
      </div>
      <main className="flex-auto m-4">{children}</main>
    </div>
  );
}
