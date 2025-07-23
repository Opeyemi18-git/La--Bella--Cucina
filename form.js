document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const greeting = document.getElementById('greeting');

  // Show today's date
  const today = new Date();
  const datePara = document.createElement('p');
  datePara.innerText = `Today’s Date: ${today.toDateString()}`;
  document.body.insertBefore(datePara, form);

  // Fade in animation
  form.style.opacity = 0;
  form.style.transition = "opacity 1.5s ease-in";
  setTimeout(() => {
    form.style.opacity = 1;
  }, 300);
