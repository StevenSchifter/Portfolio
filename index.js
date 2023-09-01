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
        document.querySelector("body").classList.add("darkMode");
        document.querySelector("#modeSwitch").innerText = "🌙 Dark Mode";
        // Multi-element style setting code borrowed from https://stackoverflow.com/a/21319538
        links = document.querySelectorAll("a");
        for(var a = 0; a < links.length; ++a)
        {
            links[a].classList.add("darkLink");
        }
        tableHeaderCells = document.querySelectorAll("th")
        for(var h = 0; h < tableHeaderCells.length; ++h)
        {
            tableHeaderCells[h].classList.add("darkTableCellBorder");
        }
    }
    else if(myDarkMode == 0)
    {
        document.querySelector("body").classList.remove("darkMode");
        document.querySelector("#modeSwitch").innerText = "☀ Light Mode";
        links = document.querySelectorAll("a");
        for(var a = 0; a < links.length; ++a)
        {
            links[a].classList.remove("darkLink");
        }
        tableHeaderCells = document.querySelectorAll("th")
        for(var h = 0; h < tableHeaderCells.length; ++h)
        {
            tableHeaderCells[h].classList.remove("darkTableCellBorder");
        }
    }
}

// Dark mode detection code borrowed from https://flaviocopes.com/javascript-detect-dark-mode/
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