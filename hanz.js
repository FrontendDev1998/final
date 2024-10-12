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



//////// 2nd page js /////////////////////////////////////////////////////////////////////
// add to cart js

