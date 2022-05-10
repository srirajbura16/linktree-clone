import { FormControl, Input, Button } from "@chakra-ui/react";
import { NextPage } from "next";
import SettingsLayout from "../../components/Layouts/SettingsLayout";

Account.getLayout = function getLayout(page: NextPage) {
  return <SettingsLayout title="Account">{page}</SettingsLayout>;
};

export default function Account() {
  return (
    <form action="/api/user/update" method="post" className="child:mb-4">
      <FormControl>
        <label htmlFor="username">Username</label>
        <Input type="text" name="username" className="text-xl mt-2" />
      </FormControl>
      <Button type="submit" colorScheme="blue" className="w-full">
        Change username
      </Button>
    </form>
  );
}
