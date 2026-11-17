function addTransaction() {
  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const type = document.getElementById("type").value;

  if (title === "" || amount === "" || type === "") {
    alert("Please fill all fields");
    return;
  }

  const currentUser = localStorage.getItem("currentUser");
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const userIndex = users.findIndex(u => u.email === currentUser);

  if (userIndex === -1) {
    alert("User not found");
    return;
  }

  // Create transactions array if missing
  if (!users[userIndex].transactions) {
    users[userIndex].transactions = [];
  }

  const transaction = {
    id: Date.now(),
    title,
    amount: Number(amount),
    type,
    date: new Date().toLocaleString()
  };

  users[userIndex].transactions.push(transaction);

  localStorage.setItem("users", JSON.stringify(users));

  window.location.href = "history.html";
}