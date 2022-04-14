import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getXataHeaders } from "../services";
import FormLayout from "../components/Layouts/FormLayout";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

export default function New() {
  const { data: session } = useSession();
  const router = useRouter();

  const createLink = async (event) => {
    event.preventDefault();

    const { title, url } = event.target;

    const res = await fetch("/api/create-link", {
      body: JSON.stringify({
        title: title.value,
        url: url.value,
        userId: session.user.id,
      }),
      headers: {
        ...(await getXataHeaders()),
      },
      method: "POST",
    });

    router.push(`/`);
  };

  return (
    <FormLayout title="Create new link">
      <form onSubmit={createLink} method="post">
        <FormControl>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input type="text" id="title" name="title" required />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="url">Url</FormLabel>
          <Input
            type="url"
            id="url"
            name="url"
            placeholder="https://example.com"
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" className="w-full">
          Create
        </Button>
      </form>
    </FormLayout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
