// form.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form'); // grabs the form on the page

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // stops the form from submitting immediately

    // Get values from input fields
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    // Check if any fields are empty
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // If all fields are filled
    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset(); // clears the form
  });
});
