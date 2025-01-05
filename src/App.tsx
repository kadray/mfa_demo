import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports.ts";
import { withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsExports);

function App() {
  return (
    <div className="container">
      <h1 className="heading">Hello World</h1>
    </div>
  );
}
export default withAuthenticator(App);
