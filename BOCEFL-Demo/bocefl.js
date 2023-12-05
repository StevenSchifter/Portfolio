// Detect dark scheme preference or OS dark mode setting
function detectDarkMode()
{
    // First check local storage for dark scheme preference
    if (localStorage.getItem("usingDarkScheme") === "true")
    {
        toggleScheme();
    }
    
    // If no preference was found, check OS dark mode setting and use that to set scheme and preference
    // Media-matching code borrowed from https://flaviocopes.com/javascript-detect-dark-mode/
    else if (localStorage.getItem("usingDarkScheme") === null && window.matchMedia('(prefers-color-scheme: dark)').matches)
    {
        toggleScheme();
    }
}

// Switch between light and dark schemes 
function toggleScheme()
{
    // Add or remove the dark scheme CSS class
    document.body.classList.toggle("dark-scheme");
    document.querySelector("#scheme-toggle-button").classList.toggle("dark-scheme");
    document.querySelector("#main-header").classList.toggle("dark-scheme");
    // Multi-element style setting code borrowed from https://stackoverflow.com/a/21319538
    links = document.querySelectorAll("a");
    for (const link of links)
    {
        link.classList.toggle("dark-scheme");
    }
    info_blocks = document.querySelectorAll(".info")
    for (const ib of info_blocks)
    {
        ib.classList.toggle("dark-scheme");
    }
    info_headers = document.querySelectorAll(".info h2");
    for (const ih of info_headers)
    {
        ih.classList.toggle("dark-scheme");
    }
    event_blocks = document.querySelectorAll(".event-block");
    for (const eb of event_blocks)
    {
        eb.classList.toggle("dark-scheme");
    }
    
    // Set dark scheme preference in local storage
    if (document.body.classList.contains("dark-scheme"))
    {
        localStorage.setItem("usingDarkScheme", "true");
    }
    else
    {
        localStorage.setItem("usingDarkScheme", "false");
    }
}