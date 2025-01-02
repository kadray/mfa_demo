
import "@aws-amplify/ui-react/styles.css";
import './App.css'
import {Amplify} from "aws-amplify";
import {withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react';
import awsExports from "./aws-exports.ts"

Amplify.configure(awsExports);


function App() {

  const { signOut } =useAuthenticator(context => [context.signOut]);
  return (
    <>
  <h1> Hello World </h1>
  <button onClick={signOut}>Sign Out</button>
  </>
  )
}

export default withAuthenticator(App)
