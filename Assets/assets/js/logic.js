// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("themeSwitcher");
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.body.className = currentTheme;
    // Change the state in storage when the user wants to change theme:
    const toggleDarkThemeForPage = () => {
        // Retrieve storage again to preserve changes made on other pages
        // after this page was loaded
        const darkThemesByPage = JSON.parse(localStorage.darkThemesByPage);
        darkThemesByPage[pathname] = !darkThemesByPage[pathname];
        localStorage.darkThemesByPage = JSON.stringify(darkThemesByPage);
        // Apply the new state of the theme after being toggled:
        document.body.classList.toggle("dark", darkThemesByPage[pathname]);
    };
    toggle.addEventListener("click", toggleDarkThemeForPage);
    document.body.classList.toggle("dark", darkThemesByPage[pathname]);


    //EL for theme switching functionality
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const newTheme = document.body.className === 'dark' ? 'light' : 'dark';
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
        result.textContent = `Theme switched to ${newTheme}`;
    });
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(key, value) {
    const existingData = readLocalStorage(key);
    const updatedData = [...existingData, value];
    localStorage.setItem[key, JSON.stringify(updatedData)]
}
// Use the following function whenever you need to redirect to a different page
let redirectURL = './index.html';

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};
