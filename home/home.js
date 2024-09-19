let todos = []

const todosList = document.getElementById('todos')
const todoInput = document.getElementById('textInput')
const inputBtn = document.getElementById('add')
const showEnterTodo = document.getElementById('showEnterTodo')
const enterTodo = document.getElementById('enterTodo')

// Get the logged-in user from localStorage
const loggedInUser = localStorage.getItem('loggedInUser')

function showTodoInput() {
    enterTodo.style.display = 'block'
}

showEnterTodo.addEventListener('click', showTodoInput)

function addTodo(e) {
    e.preventDefault()
    let textValue = todoInput.value
    todos.push(textValue)
    saveTodos()
    renderTodos()
    todoInput.value = ''
    enterTodo.style.display = 'none'
}
inputBtn.addEventListener('click', addTodo)

function removeTodo(index) {
    todos = todos.filter((todo, i) => i !== index)
    saveTodos()
    renderTodos()
}

function editTodo(index) {
    const currElementText = document.querySelector(`#todos div:nth-child(${index + 1}) p`).innerText
    const splicedText = currElementText.slice(3)
    removeTodo(index)
    showTodoInput()
    todoInput.value = splicedText
}

document.getElementById('logoutBtn').addEventListener('click', function() {
    // Redirect to the login page
    window.location.href = '../login/login.html';
});

// Save todos to localStorage for the logged-in user
function saveTodos() {
    localStorage.setItem(`${loggedInUser}_todos`, JSON.stringify(todos))
}

// Load todos from localStorage for the logged-in user
function loadTodos() {
    const storedTodos = localStorage.getItem(`${loggedInUser}_todos`)
    if (storedTodos) {
        todos = JSON.parse(storedTodos)
    }
    renderTodos()
}

function renderTodos() {
    todosList.innerHTML = ''
    todos.forEach((todo, i) => {
        let newHTML = (
            `<div class="todoItem">
                <p>${i + 1}. ${todo}</p>
                <div class="actions">
                    <i onclick="editTodo(${i})" class="fa-solid fa-pen"></i>
                    <i onclick="removeTodo(${i})" class="fa-regular fa-trash-can"></i>
                </div>
            </div>`
        )
        todosList.innerHTML += newHTML
    })
}

// Load the todos when the page loads
loadTodos()
