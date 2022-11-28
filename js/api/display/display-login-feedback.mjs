import { redirectIfToken } from "../authenticate/redirect-active-user.mjs";
import * as storage from "../../storage/local-storage.mjs";
import * as sessionStorage from "../../storage/session-storage.mjs";

export function displayLoginFeedback(response, result) {
   // Save login token & profile
   const { accessToken, ...profile } = result;
   storage.saveItem("loginToken", accessToken);
   storage.saveItem("profile", profile);
   sessionStorage.saveItem("online", true);
   // Feedback on Login
   const loginFeedback = document.querySelector("#submit-feedback-login");

   if (response.ok) {
      loginFeedback.classList.remove("d-none");
      loginFeedback.classList.replace("bg-danger", "bg-success");
      loginFeedback.innerHTML = `
          <h4 class="card-title text-center fw-semibold">Your account has been logged in!</h4>
          <p class="text-center mb-0">Redirecting to profile dashboard</p>
          `;
   } else {
      loginFeedback.classList.add("d-none");
   }

   if (result.errors && result.errors[0].message === "Invalid email or password") {
      loginFeedback.classList.remove("d-none");
      loginFeedback.innerHTML = `
         <h4 class="card-title text-center fw-semibold">Woopzy</h4>
         <p class="text-center mb-0">Your typed in the wrong email or password</p>
         `;
   }

   // Send user to view profile if valid token
   setTimeout(() => {
      redirectIfToken(accessToken);
   }, 3500);
}