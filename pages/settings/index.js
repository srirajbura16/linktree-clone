import React from "react";
import Link from "next/link";

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
