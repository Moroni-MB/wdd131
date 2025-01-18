let selectElem = document.querySelector('select')
let logo = document.querySelector('img');


function changeTheme() {
    const selectedTheme = selectElem.value;

    if (selectedTheme == 'dark') {
        document.body.classList.add('dark');
        logo.src = 'byui-logo_white.png'
    } else {
        document.body.classList.remove('dark');
        logo.src = 'logo.webp'
    }
}

selectElem.addEventListener('change', changeTheme);