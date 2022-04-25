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
                  signed in as {session.user.name}
                </div>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Link href={"/dashboard"}>dashboard</Link>
              </MenuItem>
              <MenuItem>
                <Link href={"/settings/profile"}>settings</Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Link href={"/api/auth/signout"}>Log Out</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </nav>
    </div>
  );
}
