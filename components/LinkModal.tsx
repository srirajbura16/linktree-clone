import { ReactNode } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
interface LinkModalProps {
  title: string;
  url: string;
  id: string;
  children: ReactNode;
}

export default function LinkModal({
  children,
  title,
  url,
  id,
}: LinkModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
                <Input type="text" name="title" placeholder={title} required />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="url">Url</FormLabel>
                <Input type="url" name="url" placeholder={url} required />
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
