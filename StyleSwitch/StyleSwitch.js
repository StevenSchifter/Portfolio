function detectDarkMode()
{
    const usingDarkScheme = localStorage.getItem("usingDarkScheme");
    if (usingDarkScheme == "true")
    {
        document.body.classList.add("dark-scheme");
    }
}

function toggleScheme()
{
    document.body.classList.toggle("dark-scheme");
    
    let selectedDarkScheme = "false";
    
    if (document.body.classList.contains("dark-scheme"))
    {
        let selectedDarkScheme = "true";
    }
    
    localStorage.setItem("usingDarkScheme", selectedDarkScheme);
}