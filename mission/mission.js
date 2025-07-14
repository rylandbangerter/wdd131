let selectElem = document.querySelector('select');
let logo = document.querySelector('.logo');

selectElem.addEventListener('change', changeTheme);
    function changeTheme() {
        let current = selectElem.value;
        if (current == 'dark') {
            document.body.className ='dark';
            logo.src = 'byui-logo_white.png'; // white logo
        } else {
            document.body.classList.remove('dark');
            logo.src = 'byui-logo_blue.webp'; // black logo
        }

    }  