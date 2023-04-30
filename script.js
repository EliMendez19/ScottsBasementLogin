const form = document.getElementById("password-form");

// get the user's email
const userEmail = 'emen0145@stu.cfisd.net';

// check if the user's email matches a specific email
if (userEmail === 'stu.cfisd.net') {
  // if the user's email matches, redirect them to a different site
  window.location.href = 'https://www.example.com';
}
// Define an array of blacklisted email addresses
const blacklist = ['emen0145@stu.cfisd.net', 'testing@example.com', 'eztobypass@example.com'];

// Get the email address of the user trying to access the website
const userEmail = prompt('Please enter your email address to access the website:');

// Check if the user's email address is in the blacklist
if (blacklist.includes(userEmail)) {
  alert('Access denied! Your email address is blacklisted.');
} else {
  alert('Access granted!');
  // Allow the user to access the website
  // ...
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const password = document.getElementById("password").value;
  if (password === "EM051910") {
    window.location.href = "https://sites.google.com/stu.cfisd.net/elisecretstuff/yhgfde45tg";
  } else {
    alert("not the right password lol");
  }
});
