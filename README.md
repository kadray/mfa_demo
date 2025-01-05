<header>
    <h1>MFA Demo Using AWS Amplify</h1>
    <p>Instrukcja instalacji i konfiguracji.</p>
  </header>

  <section>
    <h2>Zadanie 1: Przygotowanie środowiska</h2>
    <ol>
      <li>Sklonuj repozytorium i przejdź na branch <code>Zadanie_1</code>.</li>
      <li>Uruchom komendę:
        <pre>npm install</pre>
      </li>
      <li>Uruchom aplikację za pomocą:
        <pre>npm run dev</pre>
      </li>
    </ol>
    <div class="image">
      <img src="https://github.com/user-attachments/assets/56978ed1-f284-48fd-a3b8-f16514f256d0" alt="Oczekiwany rezultat - Zadanie 1">
      <p><strong>Oczekiwany rezultat</strong></p>
    </div>
  </section>

  <section>
    <h2>Zadanie 2: Dodanie dwuetapowej weryfikacji (MFA)</h2>
    <ol>
      <li>Skorzystaj z 
        <a href="https://docs.amplify.aws/gen1/react/start/getting-started/auth/">dokumentacji</a> i 
        <a href="https://www.youtube.com/watch?v=hQEsl93I5nE&t=153s">filmiku instruktażowego</a>.
      </li>
      <li>Pobierz aplikację <strong>Authenticator</strong> na telefon.</li>
      <li>Dodaj importy:
        <pre>
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports.ts";
        </pre>
      </li>
      <li>Skonfiguruj Amplify:
        <pre>Amplify.configure(awsExports);</pre>
      </li>
      <li>Owiń aplikację w <code>withAuthenticator</code>:
        <pre>
function App() {
  // reszta kodu
}
export default withAuthenticator(App);
        </pre>
      </li>
      <li>Stwórz konto i zweryfikuj je za pomocą e-maila oraz aplikacji Authenticator.</li>
    </ol>
    <div class="image">
      <img src="https://github.com/user-attachments/assets/dd6103f8-3fd2-47cb-ade3-b5e8b26cfc9d" alt="QR Code Verification">
      <p><strong>Oczekiwany rezultat</strong></p>
    </div>
    <div class="image">
      <img src="https://github.com/user-attachments/assets/4e695800-aac6-4a67-990e-a8c9c92ba227" alt="Success MFA">
    </div>
  </section>

  <section>
    <h2>Zadanie 3: Wylogowanie z aplikacji</h2>
    <p>Link do dokumentacji: 
      <a href="https://docs.amplify.aws/gen1/react/start/getting-started/auth/">Amplify Auth Documentation</a>
    </p>
    <ol>
      <li>Zmień import:
        <pre>import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";</pre>
      </li>
      <li>Dodaj obsługę wylogowania:
        <pre>const { signOut } = useAuthenticator((context) => [context.signOut]);</pre>
      </li>
      <li>Dodaj przycisk:
        <pre>
<button className="sign-out-button" onClick={signOut}>
  Sign Out
</button>
        </pre>
      </li>
    </ol>
    <div class="image">
      <img src="https://github.com/user-attachments/assets/942bd0a3-fa9b-47ec-9e6f-9a34b4805fb1" alt="Logout Button">
      <p><strong>Oczekiwany rezultat</strong></p>
    </div>
  </section>

  <section>
    <h2>Zadanie 4: Wyświetlanie e-maila zalogowanego użytkownika</h2>
    <p>Link do dokumentacji: 
      <a href="https://docs.amplify.aws/gen1/flutter/build-a-backend/auth/managing-attributes/">Managing Attributes</a>
    </p>
    <p>Link do rozwiązania na StackOverflow: 
      <a href="https://stackoverflow.com/questions/78031313/how-to-get-and-display-name-and-email-from-fetchuserattributes-in-basic-aws-am">StackOverflow</a>
    </p>
    <ol>
      <li>Dodaj importy:
        <pre>
import { fetchUserAttributes } from "aws-amplify/auth";
import React, { useEffect, useState } from "react";
        </pre>
      </li>
      <li>Dodaj obsługę w <code>useEffect</code>:
        <pre>
const [email, setEmail] = useState("");
useEffect(() => {
  async function fetchUserEmail() {
    const user = await fetchUserAttributes();
    const userEmail = user.email || "none";
    setEmail(userEmail);
  }
  fetchUserEmail();
}, []);
        </pre>
      </li>
      <li>Wyświetl e-mail w <code>return</code>:
        <pre>
<p className="user-email">
  Logged in as: <br />
  {email}
</p>
        </pre>
      </li>
    </ol>
    <div class="image">
      <img src="https://github.com/user-attachments/assets/00d9800d-d93e-46a5-a921-e0905ae657a8" alt="Display Email">
      <p><strong>Oczekiwany rezultat</strong></p>
    </div>
  </section>

  <section>
    <h2>Zadanie 5: Usuwanie konta użytkownika</h2>
    <p>Link do dokumentacji: 
      <a href="https://docs.amplify.aws/gen1/react/build-a-backend/auth/delete-user-account/">Delete User Account</a>
    </p>
    <ol>
      <li>Dodaj import:
        <pre>import { deleteUser } from "aws-amplify/auth";</pre>
      </li>
      <li>Zaimplementuj funkcję:
        <pre>
async function handleDeleteUser() {
  try {
    await deleteUser();
  } catch (error) {
    console.log(error);
  }
}
        </pre>
      </li>
      <li>Dodaj przycisk:
        <pre>
<button className="delete-button" onClick={handleDeleteUser}>
  Delete User
</button>
        </pre>
      </li>
    </ol>
    <div class="image">
      <img src="https://github.com/user-attachments/assets/c49c0b44-6e05-4b06-a4e3-5386a1e06f3f" alt="Delete Account Button">
      <p><strong>Oczekiwany rezultat</strong></p>
    </div>
  </section>
