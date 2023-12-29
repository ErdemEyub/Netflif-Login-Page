document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Here, you can use these values to authenticate the user
    // or to send the login information to a server.
    console.log('Email:', email);
    console.log('Password:', password);
});


