import React from "react";
import FormLayout from "../../components/Layouts/FormLayout";

export default function Account() {
  return (
    <FormLayout>
      <form>
        <h1>Delete Account</h1>
        <hr />
        <p>This cannot be undone.</p> <button>Delete</button>
      </form>
    </FormLayout>
  );
}
