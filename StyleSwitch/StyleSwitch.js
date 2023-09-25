function detectDarkMode()
{
    const usingDarkScheme = localStorage.getItem("usingDarkScheme");
    if (usingDarkScheme == 1)
    {
        document.body.classList.add("dark-scheme");
    }
}

function toggleScheme()
{
    document.body.classList.toggle("dark-scheme");
    
    let selectedDarkScheme = 0;
    
    if (document.body.classList.contains("dark-scheme"))
    {
        let selectedDarkScheme = 1;
    }
    
    localStorage.setItem("usingDarkScheme", selectedDarkScheme);
}