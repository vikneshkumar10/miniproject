document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task !== "") {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task} 
            <button class="delete-btn">Delete</button>
        `;

       
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        document.getElementById('todo-list').appendChild(li);
        input.value = ""; 
    }
}
