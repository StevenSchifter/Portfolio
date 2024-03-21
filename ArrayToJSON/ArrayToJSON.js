"use strict";

const gfb = document.querySelector("#generateFlatButton");
const gnb = document.querySelector("#generateNestedButton");
gfb.addEventListener("click", event => {event.preventDefault(); validateFields();});  
gnb.addEventListener("click", event => {event.preventDefault(); validateFields(true);});  

// This function checks whether any of the input fields are blank.
function validateFields(useNesting = false)
{
    const myFields = document.querySelectorAll(".data");
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
        let myObject = {};
        let objectKey = f.labels[0].textContent;
        myObject[objectKey] = f.value;
        myObjectArray.push(myObject);
    }
    
    // If all input fields have data, generate and display syntactically valid JSON under the button.
    if (useNesting)
    {       
        let indentation = parseInt(document.querySelector("#indentation").value);
        generateJSON(myObjectArray, indentation);
    }
    else
    {
        generateJSON(myObjectArray, 0);
    }
    return true;
    
    // generateJSON() is an inner function, which keeps code organized.
    function generateJSON(myData, indentation)
    {
        if (!indentation)
        {
            document.getElementById("output").innerHTML = `<pre>${JSON.stringify(myData)}</pre>`;
        }
        else
        {
            document.getElementById("output").innerHTML = `<pre>${JSON.stringify(myData, null, indentation)}</pre>`;
        }
    }
}