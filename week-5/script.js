var loggedIn = false;

var logInCount = 0

while (!loggedIn) {

    var username = prompt('Username:');

    var password = prompt('Password:');

    if (username == 'samy123' && password == '12345') {

        alert('Welcome back, ' + username);

        loggedIn = true;

    } else if(logInCount >= 2) {
        alert('You are locked out')
        break;
    }
        else {

        alert('Inaccurate credentials!');
        logInCount++ 


    }

}