import React from "react";
import FormLayout from "../../components/Layouts/FormLayout";

export default function Account() {
  return (
    <FormLayout>
      <form action="/api/auth/delete" method="DELETE">
        <h1>Delete Account</h1>
        <hr />
        <p>This cannot be undone.</p>
        <button type="submit">Delete</button>
      </form>
    </FormLayout>
  );
}
