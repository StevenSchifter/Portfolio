'use strict';
// Global constants
const colorScheme = document.querySelector('meta[name="color-scheme"]');

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
function toggleScheme(pref)
{
    // Change the content of the meta tag named "color-scheme",
    // and then set dark scheme preference in local storage
    if (pref === 'auto')
    {
        colorScheme.setAttribute('content', 'light dark');
        localStorage.setItem('usingDarkScheme', 'auto');
    }
    else if (pref === 'light')
    {
        colorScheme.setAttribute('content', 'light');
        localStorage.setItem('usingDarkScheme', 'false');
    }
    else if (pref === 'dark')
    {
        colorScheme.setAttribute('content', 'dark');
        localStorage.setItem('usingDarkScheme', 'true');
    }
}

// Switch font family
function toggleFontFamily(fontFamilyPref)
{
    //let fontSelector = document.querySelector('#font-selector');
    fontFamilyPref === 'default' ? document.body.style.fontFamily = '' : document.body.style.fontFamily = fontFamilyPref;
}