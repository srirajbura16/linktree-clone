import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export default function LinkModel({ children, title, url, id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* <Button onClick={onOpen}>{children}</Button> */}
      <div onClick={onOpen}>{children}</div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Link</ModalHeader>
          <ModalCloseButton />
          <form action="/api/links/update" method="post">
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input type="text" name="title" required />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="url">Url</FormLabel>
                <Input
                  type="url"
                  name="url"
                  placeholder="https://example.com"
                  required
                />
              </FormControl>
              <input type="hidden" value={id} name="linkId" />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Update
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
