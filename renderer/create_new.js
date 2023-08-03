document.addEventListener('DOMContentLoaded', function () {
    const getDirectoryButton = document.getElementById('select_dir_btn');
    //const displayDirectory = document.getElementById('display_dir_input');
    const createProject = document.getElementById('new_prj_create');

    const close_btn = document.getElementById('new_prj_close');
    const open_btn = document.getElementById('new_Project');
    const container = document.getElementById('new_container');
    const dirHandle = '';
    let isNewPrjWinOpen = false;

    console.log("isProjcetWinOpen = ", isNewPrjWinOpen);  
    
    open_btn.addEventListener('click', function () {
        if (!isNewPrjWinOpen)
        {
            container.style.display = 'block';
            isNewPrjWinOpen = true;
        }
    });

    close_btn.addEventListener('click', function () {
        if (isNewPrjWinOpen)
        {
            container.style.display = 'none';
            isNewPrjWinOpen = false;
        }
    });


});