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
    <div className="bg-black">
      <nav className=" text-red-400 flex flex-wrap justify-between items-center mx-auto ">
        <h1>Linktree</h1>
        {session ? (
          <Menu>
            <MenuButton as={Button} variant="outline">
              Profile
            </MenuButton>
            <MenuList>
              <div className="text-base">signed in as {session.user.name}</div>
              <MenuDivider />
              <MenuItem>
                <Link href={"/dashboard"}>dashboard</Link>
              </MenuItem>
              <MenuItem>
                <Link href={"/settings"}>settings</Link>
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
