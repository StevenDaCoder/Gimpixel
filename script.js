// Function to ask for the password and verify it via an API
function askForPassword(successCallback) {
    const userPassword = prompt("Please enter the password to set the server status:");

    fetch('/verify-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: userPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            successCallback();  // Call the callback function to show content if password is correct
        } else {
            alert('Incorrect password. Access denied.');
            window.location.href = 'index.html'; // Redirect to another page if password is wrong
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
}