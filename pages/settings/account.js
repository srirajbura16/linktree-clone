import FormLayout from "../../components/Layouts/FormLayout";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { getXataHeaders } from "../../services";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import SettingsLayout from "../../components/Layouts/SettingsLayout";

export default function Account() {
  const { data: session } = useSession();
  const router = useRouter();

  const updateUser = async (event) => {
    event.preventDefault();

    const { username } = event.target;

    const res = await fetch("/api/user/update-user", {
      body: JSON.stringify({
        username: username.value,
        userId: session.user.id,
      }),
      headers: {
        ...(await getXataHeaders()),
      },
      method: "PATCH",
    });

    router.push(`/`);
  };

  return (
    <SettingsLayout>
      <FormLayout title="Account">
        <form onSubmit={updateUser} method="patch">
          <FormControl>
            <label htmlFor="username">Username</label>
            <Input type="text" name="username" className="text-xl mt-2" />
          </FormControl>
          <Button type="submit" colorScheme="blue" className="w-full">
            Change username
          </Button>
        </form>
      </FormLayout>
    </SettingsLayout>
  );
}
