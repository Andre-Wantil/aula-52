const toggle = document.getElementById('toggle-theme');

function checkTheme() {
    if (localStorage.getItem('check')) {
        document.body.classList.add('dark-theme');
        console.log(localStorage.getItem('check'))
        return
    } else {
        document.body.classList.remove('dark-theme');
        console.log(localStorage.getItem('check'))
        return
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('check', true)
        console.log(localStorage.getItem('check'))
        toggle.innerHTML = `
            <img src="./images/sol.png" alt="Tema claro">
        `
    } else {
        localStorage.removeItem('check')
        console.log(localStorage.getItem('check'))
        toggle.innerHTML = `
            <img src="./images/lua.png" alt="Tema escuro">
        `
    }
}


checkTheme()

toggle.addEventListener('click', () => {
    toggleTheme();
})