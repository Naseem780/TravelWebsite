const emailInput = document.getElementById('email');
const emailError = emailInput.nextElementSibling;

function validateEmail() {
  const email = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    emailInput.classList.add('error');
    emailError.innerText = 'Please enter a valid email address';
    emailError.style.visibility = 'visible';
    emailInput.style.borderColor = 'red'; // add this line to set the border color to red
    emailError.style.color = 'red';
  } else {
    emailInput.classList.remove('error');
    emailError.style.visibility = 'hidden';
  }
}

emailInput.addEventListener('blur', validateEmail);

const usernameInput = document.getElementById('username');
const usernameError = usernameInput.nextElementSibling;

function validateUsername() {
  const username = usernameInput.value.trim();
  const isValidUsername = username !== '';

  if (!isValidUsername) {
    usernameInput.classList.add('error');
    usernameError.innerText = 'Please enter a valid username';
    usernameError.style.visibility = 'visible';
    usernameError.style.borderColor = 'red'; // add this line to set the border color to red
    usernameError.style.color = 'red';
  } else {
    usernameInput.classList.remove('error');
    usernameError.style.visibility = 'hidden';
  }
}

usernameInput.addEventListener('blur', validateUsername);

const commentInput = document.getElementById('comments');
const commentError = commentInput.nextElementSibling;

function validateComment() {
  const comment = commentInput.value.trim();
  const isValidComment = comment !== '';

  if (!isValidComment) {
    commentInput.classList.add('error');
    commentError.innerText = 'Please enter a valid comment';
    commentError.style.visibility = 'visible';
    commentError.style.borderColor = 'red';
    commentError.style.color = 'red';
  } else {
    commentInput.classList.remove('error');
    commentError.style.visibility = 'hidden';
  }
}

function validateForm() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var comments = document.getElementById("comments").value;

  if (username == "" || email == "" || comments == "") {
    alert("Please fill in all fields before submitting.");
    return false;
  }

  // If all fields are filled, submit the form.
  document.getElementById("comment-form").setAttribute("action", "mailto:mhdnaseem32@gmail.com");
  document.getElementById("comment-form").setAttribute("method", "post");

  // Display a thank you message after submitting the form.
  alert("Thank you for your feedback!");

  return true;
}














