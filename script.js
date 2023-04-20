const form = document.getElementById("password-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const password = document.getElementById("password").value;
  if (password === "EM051910") {
    window.location.href = "https://sites.google.com/stu.cfisd.net/elisecretstuff/yhgfde45tg";
  } else {
    alert("not the right password lol");
  }
});
