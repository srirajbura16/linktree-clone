import React from "react";
import Link from "next/link";

export default function SettingsLayout({ children }) {
  return (
    <div className="flex flex-col sm:flex-row max-w-4xl mx-auto p-4">
      <div className="p-4 text-2xl">
        <div className="underline text-amber-500 hover:text-black">
          <Link href="/settings/profile">Profile</Link>
        </div>
        <div className="underline text-amber-500 hover:text-black">
          <Link href="/settings/account">Account</Link>
        </div>
      </div>
      <main className="border-t-2 sm:border-l-2 sm:border-t-0  flex-auto">
        {children}
      </main>
    </div>
  );
}
