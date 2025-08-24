"use strict";
// Global constants
const today = new Date(); // Today's date
const thisYear = today.getFullYear();
const colorScheme = document.querySelector('meta[name="color-scheme"]');
const schemeSelector = document.querySelector('#scheme-selector');

// Write current year for copyright info
function writeCurrentYear()
{
    // Alternative to document.write learned from https://stackoverflow.com/a/27531116
    document.querySelector(".current-year").innerHTML = thisYear;
}

// Detect color scheme preference or OS light/dark mode setting
function detectColorSchemePref()
{
    let usingDarkScheme = localStorage.getItem('usingDarkScheme');
    
    // First check local storage for dark scheme preference,
    // and then make the selector value match that preference
    if (usingDarkScheme === 'true')
    {
        toggleScheme('dark');
    }
    else if (usingDarkScheme === 'false')
    {
        toggleScheme('light');
    }
    else // Default to automatic color scheme
    {
        toggleScheme('auto');
    }
}

// Switch between automatic, light, and dark schemes 
function toggleScheme(schemePref)
{
    // Change the content of the meta tag named "color-scheme",
    // and then set the color scheme preference in local storage
    if (schemePref === 'dark')
    {
        colorScheme.setAttribute('content', 'dark');
        localStorage.setItem('usingDarkScheme', 'true');
        schemeSelector.value = 'dark';
    }
    else if (schemePref === 'light')
    {
        colorScheme.setAttribute('content', 'light');
        localStorage.setItem('usingDarkScheme', 'false');
        schemeSelector.value = 'light';
    }
    else if (schemePref === 'auto')
    {
        colorScheme.setAttribute('content', 'light dark');
        localStorage.setItem('usingDarkScheme', 'auto');
        schemeSelector.value = 'auto';
    }
}