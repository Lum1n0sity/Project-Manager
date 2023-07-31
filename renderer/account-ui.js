const container = document.getElementById('login_container');
const acc_Button = document.getElementById('Account');

acc_Button.addEventListener('click', function () {
    if (container.style.display === none)
    {
        container.style.display = 'block';
    }
    else 
    {
        container.style.display = 'none';
    }
});