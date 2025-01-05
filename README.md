# MFA demo using amplify
Zadanie 1:
Celem zadania jest przygotowanie środowiska do zadań związanych z MFA:

Zkolnuj repozytory oraz przejdź na branch Zadanie_1
Pobierz odpowiedni rzeczy za pomocą komendy npm install
Odpal aplikację za pomocą komendy npm run dev

Oczekiwany rezultat:
![image](https://github.com/user-attachments/assets/56978ed1-f284-48fd-a3b8-f16514f256d0)

Zadanie 2:
Celem zadania jest dodania  dwu etapowej weryfikacji.
Link do dokumentacji oraz filmiku z instrukcją: https://www.youtube.com/watch?v=hQEsl93I5nE&t=153s, https://docs.amplify.aws/gen1/react/start/getting-started/auth/
Należy pobrać na telefon Authenticator:
![image](https://github.com/user-attachments/assets/7cda498c-60b4-42f9-85f7-17246c46c966)

Dodaj odpwiednie improty:
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { withAuthenticator} from "@aws-amplify/ui-react";
import awsExports from "./aws-exports.ts";

Następnie trzeba zaimplementować: 
Amplify.configure(awsExports);

Oraz zapakować naszą Aplikacje w 
function App() {
// reszta kodu
}
export default withAuthenticator(App);

Aby przetestować czy Aplikacja działa należy stowrzyć konto, zweryfikować je za pomocą Emailu oraz w aplikacji authenticator zeskanować kod QR
Oczekiwane rezultaty:
![image](https://github.com/user-attachments/assets/dd6103f8-3fd2-47cb-ade3-b5e8b26cfc9d)
![image](https://github.com/user-attachments/assets/4e695800-aac6-4a67-990e-a8c9c92ba227)

Zadanie 3:
Celem zadania jest dodanie opcji wylogowania się z aplikacji:
Link do dokumentacji:https://docs.amplify.aws/gen1/react/start/getting-started/auth/

Należy zmienić import:
import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";
Dodac do funkcji:
const { signOut } = useAuthenticator((context) => [context.signOut]);
Oraz w returnie umieścić guzik który będzię wykonywać danąfunkcje:
    <button className="sign-out-button" onClick={signOut}>
      Sign Out
    </button>
Oczekiwany rezultat:
![image](https://github.com/user-attachments/assets/942bd0a3-fa9b-47ec-9e6f-9a34b4805fb1)

Zadanie 4:
Celem zadania jest dodanie opcji wyświetlenia emailu zalogowanego użytkownika:
Link do stacka : https://stackoverflow.com/questions/78031313/how-to-get-and-display-name-and-email-from-fetchuserattributes-in-basic-aws-am
Link do dokumentacji: https://docs.amplify.aws/gen1/flutter/build-a-backend/auth/managing-attributes/

Należy dodać odpowiennie importy:
import { fetchUserAttributes } from "aws-amplify/auth";
import React, { useEffect, useState } from "react";

Stworzyć odpwoednią zmienną w funkcji oraz useEffect który będzię ją uzupełniał
  const [email, setEmail] = useState("");
  useEffect(() => {
    async function fetchUserEmail() {
      const user = await fetchUserAttributes();
      const userEmail = user.email || "none";
      setEmail(userEmail);
    }
    fetchUserEmail();
  }, []);

Oraz zwrócić ją w returnie:
      <p className="user-email">
        Logged in as: <br />
        {email}
      </p>
Oczekiwany rezultat:
![image](https://github.com/user-attachments/assets/00d9800d-d93e-46a5-a921-e0905ae657a8)


Zadanie 5:
Celem zadania jes dodanie opcji usuwania konta:
Link do dokumentacji: https://docs.amplify.aws/gen1/react/build-a-backend/auth/delete-user-account/

Należy dodać odpwowiedni import:
import { deleteUser } from 'aws-amplify/auth';

Dodać odpowiednią fukcję z dokumentacji:
async function handleDeleteUser() {
  try {
    await deleteUser();
  } catch (error) {
    console.log(error);
  }
}
Oraz przycisk wywołujący tę funkcję:
        <button className="delete-button" onClick={handleDeleteUser}>
          Delete User
        </button>

Oczekiwany rezultat:
![image](https://github.com/user-attachments/assets/c49c0b44-6e05-4b06-a4e3-5386a1e06f3f)
