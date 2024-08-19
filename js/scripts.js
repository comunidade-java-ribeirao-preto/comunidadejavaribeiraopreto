document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    /*
    // Verificar o tema atual no localStorage
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    themeToggle.checked = currentTheme === 'dark';

    themeToggle.addEventListener('change', () => {
        const newTheme = themeToggle.checked ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
    */

    // Pop-up de inscrição
    const signupButton = document.getElementById('signup-button');
    const signupPopup = document.getElementById('signup-popup');
    const closePopup = document.querySelector('.close-popup');

    signupButton.addEventListener('click', () => {
        signupPopup.style.display = 'flex';
    });

    closePopup.addEventListener('click', () => {
        signupPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === signupPopup) {
            signupPopup.style.display = 'none';
        }
    });
});
