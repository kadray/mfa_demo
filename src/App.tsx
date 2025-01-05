import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports.ts";
import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { fetchUserAttributes } from "aws-amplify/auth";
import React, { useEffect, useState } from "react";
import { deleteUser } from "aws-amplify/auth";

Amplify.configure(awsExports);

async function handleDeleteUser() {
  try {
    await deleteUser();
  } catch (error) {
    console.log(error);
  }
}
function App() {
  const { signOut } = useAuthenticator((context) => [context.signOut]);
  const [email, setEmail] = useState("");
  useEffect(() => {
    async function fetchUserEmail() {
      const user = await fetchUserAttributes();
      const userEmail = user.email || "none";
      setEmail(userEmail);
    }
    fetchUserEmail();
  }, []);
  return (
    <div className="container">
      <h1 className="heading">Hello World</h1>
      <p className="user-email">
        Logged in as: <br />
        {email}
      </p>
      <div>
        <button className="sign-out-button" onClick={signOut}>
          Sign Out
        </button>
        <button className="delete-button" onClick={handleDeleteUser}>
          Delete User
        </button>
      </div>
    </div>
  );
}
export default withAuthenticator(App);
