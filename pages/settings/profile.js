import FormLayout from "../../components/Layouts/FormLayout";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <FormLayout title="Profile">
      <form>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Enter name" />
        </FormControl>

        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter email" />
        </FormControl>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type="text" placeholder="Enter Username" />
        </FormControl>

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input
            type="textarea"
            placeholder="Tell us a little bit about yourself"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Password" />
        </FormControl>

        <Button colorScheme="blue" type="submit" className="w-full">
          Update
        </Button>
      </form>
    </FormLayout>
  );
}
