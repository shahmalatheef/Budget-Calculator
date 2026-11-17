// Get current user
const email = localStorage.getItem("currentUser");

let users = JSON.parse(localStorage.getItem("users")) || [];

const user = users.find((u) => u.email === email);

// If not logged in
if (!user) {
  window.location = "index.html";
}

// Welcome message
welcome.innerHTML = `Hi, ${user.username}`;

// Calculate totals
const income = user.transactions
  .filter((t) => t.type === "income")
  .reduce((total, item) => total + item.amount, 0);

const expense = user.transactions
  .filter((t) => t.type === "expense")
  .reduce((total, item) => total + item.amount, 0);

const balance = income - expense;

// Display values
incomeBox.innerHTML = `₹${income}`;
expenseBox.innerHTML = `₹${expense}`;
balanceBox.innerHTML = `₹${balance}`;

// Logout
function logout() {
  localStorage.removeItem("currentUser");
  window.location = "index.html";
}