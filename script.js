
// global tools:

function obj_user(username, password) {
    var user = {
        username: username,
        password: password
    }
    return user;
}

function userexist(username) {
    for (var i = 0; i < arr_users.length; i++) {
        if (arr_users[i].username == username) {
            return arr_users[i];
        }
    }
    return false;
}

var arr_users = [];

// end global tools!

// sign up page:

function signup() {

    var username_signup = document.getElementById('username-signup').value;
    document.getElementById('username-signup').value = "";
    var password_signup = document.getElementById('password-signup').value;
    document.getElementById('password-signup').value = "";
    var verify_password_signup = document.getElementById('verify-password').value;
    document.getElementById('verify-password').value = "";

    if (username_signup == "" || password_signup == "") {
        document.getElementById('signup-msg').innerHTML = "You must enter a UserName and Password!";
    }

    else if (password_signup != verify_password_signup) {
        document.getElementById('signup-msg').innerHTML = "Passwords do not match - Check and fix!";
    }

    else {

        if (userexist(username_signup) == false) {
            arr_users.push(obj_user(username_signup, password_signup));
            document.getElementById('signup-msg').innerHTML = "UseName: " + username_signup + " and " + "Password: " + password_signup + " Successfully registered!";
        }

        else {
            document.getElementById('signup-msg').innerHTML = "Existing username - Replace and try again";
        }

    }
}

// end sign up page!

// login page:

function login() {

    var login_user = document.getElementById('user-login').value;
    document.getElementById('user-login').value = "";
    var login_password = document.getElementById('password-login').value;
    document.getElementById('password-login').value = "";
    var Exist_username = userexist(login_user);


    if (login_user == "" || login_password == "") {
        document.getElementById('login-msg').innerHTML = "You must enter a UserName and Password!"
    }

    else {

        if (Exist_username == false) {
            document.getElementById('login-msg').innerHTML = "UserName not Exist!";
        }

        else {

            if (login_password == Exist_username.password) {
                document.getElementById('login-msg').innerHTML = "Login succeeded";
            }

            else {
                document.getElementById('login-msg').innerHTML = "Password wrong!";
            }

        }
    }
}

// end login page!

// remove page:

function remove() {
    var username_remove = document.getElementById('user-remove').value;
    document.getElementById('user-remove').value = "";
    var password_remove = document.getElementById('password-remove').value;
    document.getElementById('password-remove').value = "";
    var indexuser = arr_users.indexOf(userexist(username_remove));


    if (username_remove == "" || password_remove == "") {
        document.getElementById('remove-msg').innerHTML = "You must enter a UserName and Password!";
    }

    else {

        if (indexuser == -1) {
            document.getElementById('remove-msg').innerHTML = "UserName not found!";
        }

        else {

            if (arr_users[indexuser].password == password_remove) {
                arr_users.splice(indexuser, 1);
                document.getElementById('remove-msg').innerHTML = "Account successfully deleted!";
            }

            else {
                document.getElementById('remove-msg').innerHTML = "Password worng!";
            }
        }
    }
}

// end remove page!

