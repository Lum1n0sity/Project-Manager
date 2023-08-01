document.addEventListener('DOMContentLoaded', () => {
    const container_lo = document.getElementById('login_container');
    const container_cr = document.getElementById('create_acc_container');

    const acc_Button = document.getElementById('Account');
    const switch_lo = document.getElementById('switch_login_cr_btn');
    const switch_cr = document.getElementById('switch_create_lo_btn');

    const close_Button_lo = document.getElementById('close_btn_lo');
    const close_Button_cr = document.getElementById('close_btn_cr');

    var isAccMenuOpen = false;

    acc_Button.addEventListener('click', function () {
        container_lo.style.display = 'block';
        close_Button_lo.style.display = 'block';
        isAccMenuOpen = true;
    });

    close_Button_lo.addEventListener('click', function () {
        if (isAccMenuOpen)
        {
            container_lo.style.display = 'none';
            close_Button_lo.style.display = 'none';
            isAccMenuOpen = false;
        }
    });

    close_Button_cr.addEventListener('click', function () {
        if (isAccMenuOpen)
        {
            container_lo.style.display = 'none';
            container_cr.style.display = 'none';
            close_Button_cr.style.display = 'none';
            close_Button_lo.style.display = 'none';
        }
    });

    switch_cr.addEventListener('click', function () {
        if (isAccMenuOpen)
        {
            container_cr.style.display = 'block';
            container_lo.style.display = 'none';
            close_Button_lo.style.display = 'none';
            close_Button_cr.style.display = 'block';
        }
    });

    switch_lo.addEventListener('click', function () {
        if (isAccMenuOpen)
        {
            container_lo.style.display = 'block';
            container_cr.style.display = 'none';
            close_Button_cr.style.display = 'none';
            close_Button_lo.style.display = 'block';
        }
    });
})