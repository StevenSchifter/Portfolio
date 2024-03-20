"use strict";

// This function checks whether any of the input fields are blank.
function validateFields()
{
    const myFields = document.querySelectorAll("input");
    let myObjectArray = []; // https://stackoverflow.com/questions/15742442/declaring-array-of-objects
    
    // If any input field is blank, display a message under the button and break out of validateElements.
    // Indexed iteration in for-of loop code inspired by https://stackoverflow.com/a/10179849
    for (let [i, f] of myFields.entries())
    {
        if (f.value == "")
        {
            document.getElementById("output").innerHTML = "Please fill in all fields.";
            return false;
        }
        // Custom key inspiration:  https://www.geeksforgeeks.org/how-to-use-a-variable-for-a-key-in-a-javascript-object-literal/
        let objectKey = f.labels[0].textContent;
        let myObject = {};
        myObject[objectKey] = f.value;
        myObjectArray.push(myObject);
    }
    
    // If all input fields have data, generate and display syntactically valid JSON under the button.
    generateJSON(myObjectArray);
    return true;
    
    // generateJSON() is an inner function, which keeps code organized.
    function generateJSON(myData)
    {
        document.getElementById("output").innerHTML = JSON.stringify(myData);
    }
}