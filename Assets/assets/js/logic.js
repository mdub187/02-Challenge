document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("theme-switch");
    const currentTheme = localStorage.getItem('theme-switcher') || 'dark';

    // Apply stored theme on load
    document.body.classList.toggle("dark", currentTheme === 'dark');

    function themeSwitch() {
        const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
        document.body.classList.toggle("dark");
        localStorage.setItem('theme-switcher', newTheme);
    }

    // Event listener for the theme switch button
    if (button) {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            themeSwitch();
        });
    }
});

// Function to read from local storage
function readLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};

// Function to store data in local storage
function storeLocalStorage(key = "blogForm", value = "content") {
    const existingData = readLocalStorage(key);
    const updatedData = [...existingData, value];
    localStorage.setItem(key, JSON.stringify(updatedData));
};

function redirectPage(url) {
    window.location.href = url; // Redirect to the given URL
}

// Attach event listener to the back button
const backEl = document.getElementById('back');

if (backEl) {
    backEl.addEventListener('click', () => {
        redirectPage('../index.html');
    });
    window.location.assign('../index.html');
};