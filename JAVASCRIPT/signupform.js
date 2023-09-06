import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from "../JAVASCRIPT/adminsmodule.js";
import { showMessage } from "../JAVASCRIPT/showMessage.js"

const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  console.log(email, password);

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);

    const signupModal = document.querySelector("#signupModal");
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();

    showMessage("Bienvenido " + userCredentials.user.email)

  } catch (error) {
    console.log(error.message);
    console.log(error.code);

    if (error.code == "auth/email-already-in-use") {
        showMessage("El email ya esta en uso", "error")
    } else if (error.code == "auth/invalid-email") {
        showMessage("El email no es valido", "error")
    } else if (error.code == "auth/weak-password") {
        showMessage("La contraseña no es segura", "error")
    } else if (error.code) {
        showMessage("El email ya esta en uso", "error")
    }
  }
});
