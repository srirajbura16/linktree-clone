import { FormLabel, FormControl, Input, Button } from "@chakra-ui/react";
import SettingsLayout from "../../components/Layouts/SettingsLayout";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  return (
    <SettingsLayout title="Profile">
      <form action="/api/user/update" method="post" className="child:mb-4">
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input type="text" name="name" placeholder="Enter name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input type="email" name="email" placeholder="Enter email" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Input
            type="textarea"
            placeholder="Tell us a little bit about yourself"
            name="description"
          />
        </FormControl>

        <Button colorScheme="blue" type="submit" className="w-full">
          Update
        </Button>
      </form>
    </SettingsLayout>
  );
}
