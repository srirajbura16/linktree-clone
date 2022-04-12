import React from "react";
import FormLayout from "../../components/Layouts/FormLayout";

export default function Account() {
  return (
    <FormLayout>
      <form>
        <h3>Change username</h3>
        <hr />
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
        </div>
        <button type="submit">Change username</button>
      </form>
      <form action="/api/auth/delete" method="DELETE">
        <h3>Delete Account</h3>
        <hr />
        <p>This cannot be undone.</p>
        <button type="submit">Delete</button>
      </form>
    </FormLayout>
  );
}
