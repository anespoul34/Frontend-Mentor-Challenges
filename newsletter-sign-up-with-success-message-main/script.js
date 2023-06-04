const main = document.querySelector("#main-container");
const form = document.querySelector("#contact-form");
const dismissBtn = document.querySelector("#dismiss");
const successEmail = document.querySelector("#success-email");
const emailInput = document.getElementById("email");

dismissBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (main.classList.contains('success')) {
    main.classList.remove('success');
    emailInput.value = "";
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  email = emailInput.value;

  if (!isValidEmail(email)) {
    form.classList.add('invalid');
    return;
  } else if (form.classList.contains('invalid')) {
    form.classList.remove('invalid');
  }

  main.classList.add('success');
  successEmail.textContent = email;
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}