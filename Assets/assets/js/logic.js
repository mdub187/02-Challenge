// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById("themeSwitcher");
  const result = document.getElementById("result");
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.body.className = currentTheme;

  //EL for theme switching functionality
  button.addEventListener("click", function(event) {
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
// ! Use the following function whenever you need to redirect to a different page

let redirectURL = './index.html';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

