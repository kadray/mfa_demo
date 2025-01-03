import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import "./App.css";
import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports.ts";

Amplify.configure(awsExports);

function App() {
  const { signOut } = useAuthenticator((context) => [context.signOut]);
  return (
    <div className="container">
      <h1 className="heading">Hello World</h1>
      <button className="sign-out-button" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
}

export default withAuthenticator(App);
