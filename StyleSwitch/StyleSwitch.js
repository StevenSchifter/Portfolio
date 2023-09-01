var inDarkMode = 0;

function toggleMode()
{
    inDarkMode = 1 - inDarkMode;
    setMode(inDarkMode);
}

function setMode(myDarkMode)
{
    if(myDarkMode == 1)
    {
        document.querySelector("body").classList.add("darkmode");
        document.querySelector("a").classList.add("darklink");
        document.querySelector("#currentMode").innerText = "🌙 Dark Mode";
    }
    else if(myDarkMode == 0)
    {
        document.querySelector("body").classList.remove("darkmode");
        document.querySelector("a").classList.remove("darklink");
        document.querySelector("#currentMode").innerText = "☀ Light Mode";
    }
}

// Some code borrowed from https://flaviocopes.com/javascript-detect-dark-mode/

function detectDarkMode()
{
    if(window.matchMedia)
    {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches)
        {
            toggleMode();
        }
    }
}