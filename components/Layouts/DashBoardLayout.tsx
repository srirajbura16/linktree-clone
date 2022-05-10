import { useSession } from "next-auth/react";
import Link from "next/link";
import { ReactNode } from "react";

interface DashBoardLayoutProps {
  children: ReactNode;
}

export default function DashBoardLayout({ children }: DashBoardLayoutProps) {
  const { data: session } = useSession();
  return (
    <div className=" max-w-4xl mx-auto p-4 ">
      <div className="bg-slate-300 text-center p-2 child:underline child:underline-offset-2 visited:text-red-600">
        <Link href="/dashboard">Dashboard</Link> -{"  "}
        <Link href="/dashboard/new">Create new link</Link> -{"  "}
        {session && session?.user?.username ? (
          <Link href={`/${session?.user?.username}`}>
            {session?.user?.username}
          </Link>
        ) : (
          <Link href={`/settings/account`}>Create Username</Link>
        )}
      </div>
      <main className="flex-auto m-4">{children}</main>
    </div>
  );
}
