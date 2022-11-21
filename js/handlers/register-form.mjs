export function getRegisteredUserFromForm() {
   const formToRegister = document.querySelector("#form-to-register");

   const getFormData = (event) => {
      event.preventDefault();

      const registeredFormData = event.target;

      const newUserAccount = {
         name: registeredFormData.name.value,
         email: registeredFormData.email.value,
         password: registeredFormData.password.value,
         banner: registeredFormData.banner.value,
         avatar: registeredFormData.avatar.value,
      };

      const method = registeredFormData.method;
      const action = registeredFormData.action;

      console.log("it worked", newUserAccount, method);

      // Calling function to authenticate & register new useraccount on API
      registerNewUser(newUserAccount, method, action);
   };

   formToRegister.addEventListener("submit", getFormData);
}