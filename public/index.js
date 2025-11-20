async function carregarTasks() {
  const res = await fetch("/tasks"); // chama o server.js
  const data = await res.json();

  const tbody = document.querySelector("#tasksTable tbody");
  tbody.innerHTML = "";

  data.forEach(task => {
    tbody.innerHTML += `
      <tr>
        <td>${task.id}</td>
        <td>${task.nome}</td>
      </tr>
    `;
  });
}

carregarTasks();
