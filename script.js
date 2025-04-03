// The correct password (hidden in code)
const correctPassword = '7789';

// Function to ask for the password and show content if correct
function askForPassword(successCallback) {
    const userPassword = prompt("Please enter the password to set the server status:");

    if (userPassword === correctPassword) {
        successCallback();  // Call the callback function to show content if password is correct
    } else {
        alert('Incorrect password. Access denied.');
        window.location.href = 'index.html'; // Redirect to another page if password is wrong
    }
}
