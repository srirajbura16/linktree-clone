import { FormControl, Input, Button } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import SettingsLayout from "../../components/Layouts/SettingsLayout";

export default function Account() {
  return (
    <SettingsLayout title="Account">
      <form action="/api/user/update" method="post" className="child:mb-4">
        <FormControl>
          <label htmlFor="username">Username</label>
          <Input type="text" name="username" className="text-xl mt-2" />
        </FormControl>
        <Button type="submit" colorScheme="blue" className="w-full">
          Change username
        </Button>
      </form>
    </SettingsLayout>
  );
}
