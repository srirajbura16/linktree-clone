import { getSession } from "next-auth/react";
import DashBoardLayout from "../../components/Layouts/DashBoardLayout";
import { FormLabel, FormControl, Input, Button } from "@chakra-ui/react";

New.getLayout = function getLayout(page) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};

export default function New() {
  return (
    <form action="/api/links/create" method="post">
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
