const body = document.querySelector("body");

const apiUrl = "https://secure-basin-07537.herokuapp.com";

window.addEventListener("load", () => {
  body.classList.add("visible");
});

const signUpForm = document.querySelector(".signup-form");
const signInForm = document.querySelector(".signin-form");

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector(".signup-name").value;
  const email = document.querySelector(".signup-email").value;
  const password = document.querySelector(".signup-password").value;
  const retypedPassword = document.querySelector(
    ".signup-retyped-password"
  ).value;

  if (password !== retypedPassword) {
    alert("Passwords do not match");
    return;
  }

  fetch(`${apiUrl}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((res) => res.json())
    .then((data) => {

      const { token } = data;

      if (token) {
        localStorage.setItem("jwt", token);
        location.href = "/pages/dashboard/dashboard.html";
      }
      else {
        alert("signUp again");
      }
    })
    .catch((err) => {
      alert("Error signing up! Retry...");
      console.log(err);
    });
});


signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector(".signin-email").value;
  const password = document.querySelector(".signin-password").value;

  fetch(`${apiUrl}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      const { token } = data;

      if (token) {
        localStorage.setItem("jwt", token);
        location.href = "/pages/dashboard/dashboard.html";
      }
      else {
        alert("signIn again");
      }
    })
    .catch((err) => {
      alert("Error signing in! Retry...");
      console.log(err);
    });
});
