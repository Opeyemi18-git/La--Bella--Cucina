document.addEventListener("DOMContentLoaded", function () {
  document.forms["contactForm"].onsubmit = function () {
    const name = this["name"].value;
    const email = this["email"].value;
    const message = this["message"].value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || message === "") {
      alert("All fields must be filled out");
      return false;
    }

    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address");
      return false;
    }

    alert("Form submitted successfully!");
    return true;
  };
});
