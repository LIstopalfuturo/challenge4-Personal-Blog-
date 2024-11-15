// Theme switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.querySelector('#theme');
    
    themeButton.addEventListener('click', function() {
        const currentStatus = themeButton.getAttribute('data-status');
        
        if (currentStatus === 'sun') {
            // Switch to dark theme
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff';
            themeButton.src = themeButton.getAttribute('data-moon');
            themeButton.setAttribute('data-status', 'moon');
        } else {
            // Switch to light theme
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#000';
            themeButton.src = themeButton.getAttribute('data-sun');
            themeButton.setAttribute('data-status', 'sun');
        }
    });
});
