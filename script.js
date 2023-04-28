const form = document.getElementById("password-form");

// get the user's email
const userEmail = 'emen0145@stu.cfisd.net';

// check if the user's email matches a specific email
if (userEmail === 'stu.cfisd.net') {
  // if the user's email matches, redirect them to a different site
  window.location.href = 'https://www.example.com';
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
