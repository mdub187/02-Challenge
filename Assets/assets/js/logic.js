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
        darkThemesByPage = !darkThemesByPage;
        localStorage.darkThemesByPage = JSON.stringify(darkThemesByPage);
        // Apply the new state of the theme after being toggled:
        document.body.classList.toggle("dark", darkThemesByPage);
    };
    document.addEventListener("click", toggleDarkThemeForPage);
    // document.body.classList.toggle("dark", darkThemesByPage);
    document.xml("toggle.xml");

    //EL for theme switching functionality
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const newTheme = document.body.className === 'dark' ? 'light' : 'dark';
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
        result.textContent = `Theme switched to ${newTheme}`;
    });
});


const themeSwitcher = (() => {
    'use strict'
  
    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)
  
    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme()
      if (storedTheme) {
        return storedTheme
      }
  
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  
    const setTheme = theme => {
      if (theme === 'auto') {
        document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
      }
    }
  
    setTheme(getPreferredTheme())
  
    const showActiveTheme = (theme, focus = false) => {
      const themeSwitcher = document.querySelector('#bd-theme')
  
      if (!themeSwitcher) {
        return
      }
  
      const themeSwitcherText = document.querySelector('#bd-theme-text')
      const activeThemeIcon = document.querySelector('.theme-icon-active use')
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
      const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
  
      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active')
        element.setAttribute('aria-pressed', 'false')
      })
  
      btnToActive.classList.add('active')
      btnToActive.setAttribute('aria-pressed', 'true')
      activeThemeIcon.setAttribute('href', svgOfActiveBtn)
      const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
      themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
  
      if (focus) {
        themeSwitcher.focus()
      }
    }
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const storedTheme = getStoredTheme()
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(getPreferredTheme())
      }
    })
  
    window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getPreferredTheme())
  
      document.querySelectorAll('[data-bs-theme-value]')
        .forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            setStoredTheme(theme)
            setTheme(theme)
            showActiveTheme(theme, true)
          })
        })
    })
  })

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(key="blogForm", value="content") {
    const existingData = readLocalStorage(key);
    const updatedData = [...existingData, value];
    localStorage.setItem[key, JSON.stringify(updatedData)]
}
// Use the following function whenever you need to redirect to a different page
let redirectURL = '/Users/mdub/School/Class Repo Activities/myBootCamp/WEBAPI/02-Challenge/Assets/Develop/index.html';

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};