document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('login_container');
    const acc_Button = document.getElementById('Account');

    

    const close_Button = document.getElementById('close_btn');

    var isAccMenuOpen = false;

    acc_Button.addEventListener('click', function () {
        container.style.display = 'block';
        close_Button.style.display = 'block';
        isAccMenuOpen = true;
    });

    close_Button.addEventListener('click', function () {
        if (isAccMenuOpen)
        {
            container.style.display = 'none'
            close_Button.style.display = 'none'
            isAccMenuOpen = false;
        }
    });


})
