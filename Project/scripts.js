const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const loginForm = document.getElementById('login-form');

function changeBackgroundColor(input) {
  input.style.backgroundColor = '#f9f9f9';
  input.addEventListener('focus', function() {
    input.style.backgroundColor = '#d6d6d6';
  });
  input.addEventListener('blur', function() {
    input.style.backgroundColor = '#f9f9f9';
  });
}

changeBackgroundColor(usernameInput);
changeBackgroundColor(passwordInput);

function validateLoginForm(event) {
  event.preventDefault();
  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (usernameValue === '' && passwordValue === '') {
    alert('Please enter your username and password.');
    console.log('Login error.');
  } else if (usernameValue === '') {
    alert('Please enter your username.');
    console.log('Login error.');
  } else if (passwordValue === '') {
    alert('Please enter your password.');
    console.log('Login error.');
  } else {
    alert('Login successful!');
    console.log('Login successful.');
    loginForm.reset();
  }
}

loginButton.addEventListener('click', validateLoginForm);
