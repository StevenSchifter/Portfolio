'use strict';
// Global constants
const colorScheme = document.querySelector('meta[name="color-scheme"]');

// Detect preferences
function detectPrefs()
{
    let schemeSelector = document.querySelector('#scheme-selector');
    let fontSelector = document.querySelector('#font-selector');
    let fontPref = localStorage.getItem('fontPref');
    
    // First check local storage for preferences,
    // and then make the selector values match those preferences
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
    
    // If no color scheme preference was found, check OS light/dark mode setting and use that to set scheme and preference (now handled automatically by the meta tag named "color-scheme")

    toggleFontFamily(fontPref);
    fontSelector.value = fontPref ? fontPref : 'default';
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

// Switch font family
function toggleFontFamily(fontPref = 'default')
{
    document.body.style.fontFamily = fontPref === 'default' ? '' : fontPref;
    localStorage.setItem('fontPref', fontPref);
}