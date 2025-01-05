import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports.ts";
import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";
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
