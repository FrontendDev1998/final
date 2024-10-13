document.getElementById('loginForm').addEventListener('submit', function(event) {
    var recaptchaResponse = grecaptcha.getResponse();

    // Check if reCAPTCHA is completed
    if (recaptchaResponse.length === 0) {
        // Show error message if reCAPTCHA is not completed
        document.getElementById('recaptchaError').style.display = 'block';
        event.preventDefault();
    } else {
        // reCAPTCHA is completed, proceed with the form submission
        document.getElementById('recaptchaError').style.display = 'none';
        alert('Login successful!');
    }
});

//reCaptcha
document.getElementById('fake-recaptcha-checkbox').addEventListener('click', function(e) {
    const fakeRecaptcha = document.querySelector('.fake-recaptcha');
    
    // Prevent immediate checkbox check
    if (!this.checked) {
        e.preventDefault();  // Prevent the default check behavior
        
        // Add the loading class to trigger loading animation
        fakeRecaptcha.classList.add('loading');
        
        // Simulate a loading delay (2 seconds)
        setTimeout(() => {
            fakeRecaptcha.classList.remove('loading');  // Remove loading class
            this.checked = true;  // Manually check the checkbox after loading
        }, 2000);  // Delay of 2 seconds
    }
});

         // login function
            function validateLogin(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Get the input values
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var errorDiv = document.getElementById('login-error');

        // Check if the username and password match the predefined values
        if (username === 'cute123' && password === 'admin2024') {
            // Redirect to 2nd.html if the credentials are correct
            window.location.href = '2nd.html';
        } else {
            // Show the error message if the credentials are incorrect
            errorDiv.style.display = 'block';
        }
    }
//// disable inspect
     // Disable Right Click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disable F12 Key (Dev Tools)
document.addEventListener('keydown', function(e) {
    if (e.key === "F12") {
        e.preventDefault();
    }
});

// Disable Ctrl+Shift+I (Dev Tools)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
});

// Disable Ctrl+U (View Page Source)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
});

// Disable Ctrl+Shift+J (Console)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
    }
});

// Disable Ctrl+Shift+C (Element Inspector)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
    }
});

            
