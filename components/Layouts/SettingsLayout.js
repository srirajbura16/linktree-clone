import React from "react";
import Link from "next/link";

export default function SettingsLayout({ children, title }) {
  return (
    <div className="flex flex-col sm:flex-row max-w-4xl mx-auto p-4 child:px-4 child:pt-4">
      <div className="text-2xl mb-4 child:underline child:text-amber-500 child-hover:text-black">
        <div>
          <Link href="/settings/profile">Profile</Link>
        </div>
        <div>
          <Link href="/settings/account">Account</Link>
        </div>
      </div>
      <main className="border-t-2 sm:border-l-2 sm:border-t-0  flex-auto">
        <h1 className="text-4xl mb-4">
          {title} <hr />
        </h1>
        {children}
      </main>
    </div>
  );
}
