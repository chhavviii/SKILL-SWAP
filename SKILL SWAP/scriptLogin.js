const form = document.getElementById('loginForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('Please enter your email and password.');
    } else {
        alert(`Email: ${emailInput.value}\nPassword: ${passwordInput.value}`);
        // Here you can add code to submit the form data to a server or perform further actions
    }
});