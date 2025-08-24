'use strict';
// Global constants
const colorScheme = document.querySelector('meta[name="color-scheme"]');
const schemeSelector = document.querySelector('#scheme-selector');
const fontSelector = document.querySelector('#font-selector');

// Detect preferences
function detectPrefs()
{
    let usingDarkScheme = localStorage.getItem('usingDarkScheme');
    let fontPref = localStorage.getItem('fontPref');
    
    // First check local storage for preferences,
    // and then make the selector values match those preferences
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

    if (fontPref === 'null')
    {
        fontPref = 'default';
    }
    toggleFontFamily(fontPref);
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

// Switch font family
function toggleFontFamily(fontPref)
{
    document.body.style.setProperty('--font-pref', fontPref === 'default' ? 'initial' : fontPref);
    localStorage.setItem('fontPref', fontPref);
    fontSelector.value = fontPref;
}
