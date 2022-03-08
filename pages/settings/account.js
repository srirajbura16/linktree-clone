import React from "react";
import FormLayout from "../../components/Layouts/FormLayout";
import { Button } from "react-bootstrap";

export default function Account() {
  return (
    <FormLayout>
      <h1>Delete Account</h1>
      <hr />
      <p>This cannot be undone.</p> <Button variant="danger">Delete</Button>
    </FormLayout>
  );
}
