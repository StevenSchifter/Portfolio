"use strict";

// This function checks whether any of the input fields are blank.
function validateElements()
{
    // This array of attributes is generated from the input field values when the button is clicked.
    const myAttributes = [
        document.getElementById("a1").value,
        document.getElementById("a2").value,
        document.getElementById("a3").value
    ];
    
    // Loop through myAttributes. If any input field is blank, display a message under the button and break out of validateElements.
    for (let a of myAttributes)
    {
        if (a == "")
        {
            document.getElementById("output").innerHTML = "Please fill in all attributes.";
            return false;
        }
    }
    
    // If all input fields have data, generate and display a syntactically valid JSON array under the button.
    generateJSON();
    return true;
    
    // generateJSON() is an inner function, which keeps code organized and allows use of myAttributes.
    function generateJSON()
    {
        let myAttributesJSON = JSON.stringify(myAttributes);
        document.getElementById("output").innerHTML = myAttributesJSON;
    }
}