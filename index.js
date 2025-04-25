"use strict";
// Global constants
const today = new Date(); // Today's date
const thisYear = today.getFullYear();
const colorScheme = document.querySelector('meta[name="color-scheme"]');

// Write current year for copyright info
function writeCurrentYear()
{
    // Alternative to document.write learned from https://stackoverflow.com/a/27531116
    document.querySelector(".current-year").innerHTML = thisYear;
}

// Detect color scheme preference or OS light/dark mode setting
function detectColorSchemePref()
{
    let schemeSelector = document.querySelector('#scheme-selector');
    
    // First check local storage for dark scheme preference,
    // and then make the selector value match that preference
    if (localStorage.getItem('usingDarkScheme') === 'true')
    {
        toggleScheme('dark');
        schemeSelector.value = 'dark';
    }
    else if (localStorage.getItem('usingDarkScheme') === 'false')
    {
        toggleScheme('light');
        schemeSelector.value = 'light';
    }
    else if (localStorage.getItem('usingDarkScheme') === 'auto')
    {
        toggleScheme('auto');
        schemeSelector.value = 'auto';
    }
    
    // If no preference was found, check OS light/dark mode setting and use that to set scheme and preference (now handled automatically by the meta tag named "color-scheme")
}

// Switch between automatic, light, and dark schemes 
function toggleScheme(schemePref)
{
    // Change the content of the meta tag named "color-scheme",
    // and then set the color scheme preference in local storage
    if (schemePref === 'light')
    {
        colorScheme.setAttribute('content', 'light');
        localStorage.setItem('usingDarkScheme', 'false');
    }
    else if (schemePref === 'dark')
    {
        colorScheme.setAttribute('content', 'dark');
        localStorage.setItem('usingDarkScheme', 'true');
    }
    else // Default to automatic color scheme
    {
        colorScheme.setAttribute('content', 'light dark');
        localStorage.setItem('usingDarkScheme', 'auto');
    }
}