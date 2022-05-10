import Link from "next/link";
import { Button } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function Nav() {
  const { data: session } = useSession();

  return (
    <div className="bg-black py-2">
      <nav className="text-2xl md:text-3xl mx-8 text-red-400 flex flex-wrap justify-between items-center ">
        <Link href="/">Linktree</Link>
        {session ? (
          <Menu>
            <MenuButton as={Button} variant="outline">
              Profile
            </MenuButton>
            <MenuList>
              <MenuItem>
                <div className="text-base mx-auto">
                  signed in as {session?.user?.name}
                </div>
              </MenuItem>
              <MenuDivider />
              <Link href={"/dashboard"}>
                <MenuItem>Dashboard</MenuItem>
              </Link>
              <Link href={"/settings/profile"}>
                <MenuItem>Settings</MenuItem>
              </Link>
              <MenuDivider />
              <Link href={"/api/auth/signout"}>
                <MenuItem>Log out</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        ) : (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </nav>
    </div>
  );
}
