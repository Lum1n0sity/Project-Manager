document.addEventListener('DOMContentLoaded', function () {
    const login_btn = document.getElementById('login_btn');

    login_btn.addEventListener('click', sendLoginData);

    function sendLoginData() {
        const username = document.getElementById('username_lo_in').value;
        const password = document.getElementById('password_lo_in').value;

        const dataToSend = { username: username, password: password };

        fetch('http://127.0.0.1:3000/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error sending data: ", error);
        });
    }
});
