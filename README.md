# MFA Demo Using AWS Amplify

**Instrukcja instalacji i konfiguracji.**

---

## Przygotowanie środowiska
Do wykonania zadań konieczne jest zainstalowanie **Node.js**
1. Sklonuj repozytorium i przejdź na branch `Zadania`:
    ```bash
    git clone https://github.com/kadray/mfa_demo.git
    cd mfa_demo
    git checkout Zadania
    ```

2. Zainstaluj zależności:
    ```bash
    npm install
    ```

3. Uruchom aplikację:
    ```bash
    npm run dev
    ```

**Oczekiwany rezultat:**

![Oczekiwany rezultat - Zadanie 1](https://github.com/user-attachments/assets/56978ed1-f284-48fd-a3b8-f16514f256d0)

---

## Zadanie 1: Dodanie dwuetapowej weryfikacji (MFA)

1. Skorzystaj z:
   - [Dokumentacji AWS Amplify](https://docs.amplify.aws/gen1/react/start/getting-started/auth/)
   - [Filmiku instruktażowego](https://www.youtube.com/watch?v=hQEsl93I5nE&t=153s)

2. Pobierz aplikację **Authenticator** na telefon.
   Polecamy użyć Google Authenticator (waży najmniej):
   - [App Store](https://apps.apple.com/us/app/google-authenticator/id388497605)
   - [Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en-US)

4. Do pliku `src/App.tsx` dodaj importy:
    ```javascript
    import "@aws-amplify/ui-react/styles.css";
    import { Amplify } from "aws-amplify";
    import { withAuthenticator } from "@aws-amplify/ui-react";
    import awsExports from "./aws-exports.ts";
    ```

5. Skonfiguruj Amplify:
    ```javascript
    Amplify.configure(awsExports);
    ```

6. Owiń aplikację w `withAuthenticator`:
    ```javascript
    function App() {
      // reszta kodu
    }
    export default withAuthenticator(App);
    ```

7. Stwórz konto i zweryfikuj je za pomocą e-maila oraz aplikacji Authenticator.
Możesz użyć własnego e-maila, lub skorzystać z jednorazowego np.: [TempMail](https://temp-mail.org/en/)

**Przykład weryfikacji:**

![QR Code Verification](https://github.com/user-attachments/assets/dd6103f8-3fd2-47cb-ade3-b5e8b26cfc9d)

![Success MFA](https://github.com/user-attachments/assets/4e695800-aac6-4a67-990e-a8c9c92ba227)

### Na UPeL wyślij widok formularza logowania i wygenerowany kod QR.
---

## Zadanie 2: Wylogowanie z aplikacji

**Link do dokumentacji:** [Amplify Auth Documentation](https://docs.amplify.aws/gen1/react/start/getting-started/auth/)

1. Zmień import:
    ```javascript
    import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";
    ```

2. Dodaj obsługę wylogowania:
    ```javascript
    const { signOut } = useAuthenticator((context) => [context.signOut]);
    ```

3. Dodaj przycisk:
    ```javascript
    <button className="sign-out-button" onClick={signOut}>
      Sign Out
    </button>
    ```

**Przykład:**

![Logout Button](https://github.com/user-attachments/assets/942bd0a3-fa9b-47ec-9e6f-9a34b4805fb1)
### Na UPeL wyślij widok strony z przyciskiem wylogowania
---

## Zadanie 3: Wyświetlanie e-maila zalogowanego użytkownika

**Linki do dokumentacji i rozwiązania:**
- [Managing Attributes](https://docs.amplify.aws/gen1/flutter/build-a-backend/auth/managing-attributes/)
- [StackOverflow](https://stackoverflow.com/questions/78031313/how-to-get-and-display-name-and-email-from-fetchuserattributes-in-basic-aws-am)

1. Dodaj importy:
    ```javascript
    import { fetchUserAttributes } from "aws-amplify/auth";
    import React, { useEffect, useState } from "react";
    ```

2. Dodaj obsługę w `useEffect`:
    ```javascript
    const [email, setEmail] = useState("");
    useEffect(() => {
      async function fetchUserEmail() {
        const user = await fetchUserAttributes();
        const userEmail = user.email || "none";
        setEmail(userEmail);
      }
      fetchUserEmail();
    }, []);
    ```

3. Wyświetl e-mail w `return`:
    ```javascript
    <p className="user-email">
      Logged in as: <br />
      {email}
    </p>
    ```

**Przykład:**

![Display Email](https://github.com/user-attachments/assets/00d9800d-d93e-46a5-a921-e0905ae657a8)
### Na UPeL wyślij zrzut ekranu z wyświetlonym adresem e-mail na stronie.
---

## Zadanie 4: Usuwanie konta użytkownika

**Link do dokumentacji:** [Delete User Account](https://docs.amplify.aws/gen1/react/build-a-backend/auth/delete-user-account/)

1. Dodaj import:
    ```javascript
    import { deleteUser } from "aws-amplify/auth";
    ```

2. Zaimplementuj funkcję:
    ```javascript
    async function handleDeleteUser() {
      try {
        await deleteUser();
      } catch (error) {
        console.log(error);
      }
    }
    ```

3. Dodaj przycisk:
    ```javascript
    <button className="delete-button" onClick={handleDeleteUser}>
      Delete User
    </button>
    ```

**Przykład:**

![Delete Account Button](https://github.com/user-attachments/assets/c49c0b44-6e05-4b06-a4e3-5386a1e06f3f)
### Na UPeL wyślij zrzut ekranu próby ponownego zalogowania się na konto po jego usunięciu
---

