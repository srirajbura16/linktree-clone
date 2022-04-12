import FormLayout from "../../components/Layouts/FormLayout";

export default function Profile() {
  return (
    <FormLayout>
      <h2>Public Information</h2>
      <hr />
      <form>
        <div>
          <label>Name</label>
          <input type="text" placeholder="Enter name" />
        </div>

        <div>
          <label>Email address</label>
          <input type="email" placeholder="Enter email" />
        </div>

        <div>
          <label>Username</label>
          <input type="text" placeholder="Enter Username" />
        </div>

        <div>
          <label>Description</label>
          <input
            type="textarea"
            placeholder="Tell us a little bit about yourself"
          />
        </div>

        <div>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>

        <button type="submit">Update</button>
      </form>
    </FormLayout>
  );
}
