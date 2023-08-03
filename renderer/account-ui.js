document.addEventListener('DOMContentLoaded', () => {
    const container_lo = document.getElementById('login_container');
    const container_cr = document.getElementById('create_acc_container');
    const container_acv = document.getElementById('account-details');

    const acc_Button = document.getElementById('Account');
    const login_header = document.getElementById('login_header');
    const switch_lo = document.getElementById('switch_login_cr_btn');
    const switch_cr = document.getElementById('switch_create_lo_btn');

    const close_Button_lo = document.getElementById('close_btn_lo');
    const close_Button_cr = document.getElementById('close_btn_cr');
    const close_Button_acv = document.getElementById('close_menu');

    const view_pw_lo = document.getElementById('view_password_lo');
    const password_in_lo = document.getElementById('password_lo_in');

    const login_btn = document.getElementById('login_btn');

    let isAccMenuOpen = false;
    let isPasswordVisibleLo = false;

    view_pw_lo.addEventListener('click', function () {
        if (isPasswordVisibleLo)
        {
            password_in_lo.type = 'password';
            isPasswordVisibleLo = false;
        }
        else
        {
            password_in_lo.type = 'text';
            isPasswordVisibleLo = true;
        }
    });

    login_header.addEventListener('click', function () {
        if (!isAccMenuOpen)
        {
            container_lo.style.display = 'block';
            isAccMenuOpen = true;
        }
    });

    close_Button_lo.addEventListener('click', function () {
        if (isAccMenuOpen)
        {
            container_lo.style.display = 'none';
            isAccMenuOpen = false;
        }
    });

    close_Button_cr.addEventListener('click', function () {
        if (isAccMenuOpen)
        {
            container_lo.style.display = 'none';
            container_cr.style.display = 'none';
            isAccMenuOpen = false;
        }
    });

    switch_cr.addEventListener('click', function () {
        if (isAccMenuOpen)
        {
            container_cr.style.display = 'block';
            container_lo.style.display = 'none';
        }
    });

    switch_lo.addEventListener('click', function () {
        if (isAccMenuOpen)
        {
            container_lo.style.display = 'block';
            container_cr.style.display = 'none';
        }
    });

    login_btn.addEventListener('click', Login);

    function Login() {
        const username = document.getElementById('username_lo_in').value;
        const password = document.getElementById('password_lo_in').value;

        console.log('Username: ', username);
        console.log('Password: ', password);

        const dataToSend = { username: username, password: password };

        console.log('DatatoSend: ', dataToSend);

        fetch('http://127.0.0.1:3000/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend),
        })
        .then(response => {
            const login_error_message = document.getElementById('input_error_lo');

            if (response.status === 401)
            {
                login_error_message.style.display = 'block';
                return;
            }

            return response.json();
        })
        .then(data => {
            console.log('Display Response data', data);
            const allowLogin = data.allowLogin;
            const email = data.email;

            if (allowLogin == true)
            {
                acc_Button.style.display = 'block';
                login_header.style.display = 'none';
                container_lo.style.display = 'none';

                const username_display = document.getElementById('account_name_display');
                const password_display = document.getElementById('account_password_display');
                const email_display = document.getElementById('account_email_display');

                DisplayUserCredentials(username_display, username);
                DisplayUserCredentials(password_display, password);
                DisplayUserCredentials(email_display, email);
            }
        })
        .catch(error => {
            console.error("Error sending data: ", error);
        });
    }

    const password_accountCredentials = document.getElementById('account_password_display');
    const toggle_view = document.getElementById('display_password');

    let isPassworsVisible = false;

    toggle_view.addEventListener('click', function() {
        if (isPassworsVisible)
        {
            password_accountCredentials.type = 'password';
            isPassworsVisible = false;
        }
        else
        {
            password_accountCredentials.type = 'text';
            isPassworsVisible = true;
        }
    });

    function DisplayUserCredentials(displayElement, insertValue)
    {
        displayElement.setAttribute("data-custom-value", insertValue);

        displayElement.value = insertValue;

        displayElement.addEventListener("focus", function () {
            displayElement.classList.add("selectable");
        });

        displayElement.addEventListener("blur", function () {
            if (displayElement.value === displayElement.getAttribute("data-custom-value")) {
                // If yes, set the input value to the custom value
                displayElement.value = valueToInsert;
              }
              displayElement.classList.remove("selectable");
        });
    }

    let isAccountCredentialsOpen = false;

    acc_Button.addEventListener('click', function() {
        if (!isAccountCredentialsOpen)
        {
            container_acv.style.display = 'block';
            isAccountCredentialsOpen = true;
        }
    });

    close_Button_acv.addEventListener('click', function () {
        if (isAccountCredentialsOpen)
        {
            container_acv.style.display = 'none'
            isAccountCredentialsOpen = false;
        }
    });
})