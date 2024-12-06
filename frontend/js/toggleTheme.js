const toggle = document.getElementById('toggle-theme');

function checkTheme() {
    if (localStorage.getItem('check')) {
        document.body.classList.add('dark-theme');
        return
    } else {
        document.body.classList.remove('dark-theme');
        return
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('check', true)
        toggle.innerHTML = `
            <img src="./images/sol.png" alt="Tema claro">
        `
    } else {
        localStorage.removeItem('check')
        toggle.innerHTML = `
            <img src="./images/lua.png" alt="Tema escuro">
        `
    }
}


checkTheme()

toggle.addEventListener('click', () => {
    toggleTheme();
})