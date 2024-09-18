document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();

// Get user input
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

// Check if user exists in localStorage
const storedUser = localStorage.getItem(username);

if (storedUser) {
    const userData = JSON.parse(storedUser);
    
    if (userData.password === password) {
        alert('Login successful!');
        window.location.href = '../home/home.html'; // Redirect to the todo list
    } else {
        alert('Incorrect password!');
    }
} else {
    alert('User does not exist. Please sign up.');
}
});