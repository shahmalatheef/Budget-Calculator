// login
function login() {
  const userEmail = email.value;
  const userPassword = password.value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.email === userEmail && u.password === userPassword
  );

  if (!user) {
    alert("Invalid Email or Password");
    return;
  }

  localStorage.setItem("currentUser", user.email);

  alert("Login Successful");

  window.location = "dashboard.html";
}



// register
function register() {

  const user = {
    username: username.value,
    email: email.value,
    password: password.value,
    transactions: []
  };

  if (
    user.username === "" ||
    user.email === "" ||
    user.password === ""
  ) {
    alert("Please fill all fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.find((u) => u.email === user.email);

  if (exists) {
    alert("User already exists");
    return;
  }

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration Successful");

  window.location = "login.html";
}