document.getElementById('signupForm').addEventListener('submit', function(event) {
event.preventDefault();

// Get user input
const username = document.getElementById('newUsername').value;
const password = document.getElementById('newPassword').value;

// Check if the username already exists
if (localStorage.getItem(username)) {
    alert('Username already exists! Please choose another one.');
} else {
    // Store the new user in localStorage
    const newUser = {
        username: username,
        password: password
    };
    localStorage.setItem(username, JSON.stringify(newUser));
    alert('Sign-up successful! You can now log in.');
    window.location.href = '../login/login.html'; // Redirect to the login page
    }
});