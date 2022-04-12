import FormLayout from "../../components/Layouts/FormLayout";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

export default function Account() {
  return (
    <FormLayout title="Account">
      <form>
        <FormControl>
          <label htmlFor="username">Username</label>
          <Input type="text" name="username" className="text-xl mt-2" />
        </FormControl>
        <Button type="submit" colorScheme="blue" className="w-full">
          Change username
        </Button>
      </form>
    </FormLayout>
  );
}
