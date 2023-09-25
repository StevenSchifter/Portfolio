function detectDarkMode()
{
    if (localStorage.getItem("usingDarkScheme") === "true")
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
        selectedDarkScheme = "true";
    }
    
    localStorage.setItem("usingDarkScheme", selectedDarkScheme);
}