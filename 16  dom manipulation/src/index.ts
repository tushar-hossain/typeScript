let userFrom = document.querySelector(".user-from") as HTMLFormElement;

let userName = document.querySelector("#name") as HTMLInputElement;
let userEmail = document.querySelector("#email") as HTMLInputElement;
let userCountry = document.querySelector("#country") as HTMLSelectElement;
let userCommnet = document.querySelector("#comment") as HTMLTextAreaElement;

userFrom.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = {
    name: userName.value,
    email: userEmail.value,
    country: userCountry.value,
    comment: userCommnet.value,
  };

  console.log(data);
});
