const tableBody = document.getElementById("tableBody");

function loadHistory() {
  const currentUser = localStorage.getItem("currentUser");
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.email === currentUser);

  tableBody.innerHTML = "";

  if (!user || !user.transactions || user.transactions.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" class="p-5 text-center">
          No Transactions Found
        </td>
      </tr>
    `;
    return;
  }

  user.transactions.forEach(item => {
    tableBody.innerHTML += `
      <tr class="border-b">
        <td class="p-3">${item.title}</td>
        <td class="p-3">${item.type}</td>
        <td class="p-3">₹${item.amount}</td>
        <td class="p-3">${item.date}</td>
        <td class="p-3">
          <button onclick="deleteTransaction(${item.id})"
            class="bg-red-500 text-white px-3 py-1 rounded">
            Delete
          </button>
        </td>
      </tr>
    `;
  });
}

function deleteTransaction(id) {
  const currentUser = localStorage.getItem("currentUser");
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const userIndex = users.findIndex(u => u.email === currentUser);

  users[userIndex].transactions =
    users[userIndex].transactions.filter(t => t.id !== id);

  localStorage.setItem("users", JSON.stringify(users));

  loadHistory();
}

loadHistory();