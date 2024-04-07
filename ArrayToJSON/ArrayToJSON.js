"use strict";

function getIndentation()
{
    return parseInt(document.querySelector("#indentation").value);
}

function setIndentation(indentation)
{
    document.querySelector("#indentation").value = indentation;
}

function enforceMinimumIndentationValue()
{
    let indentation = getIndentation();
    if (indentation < 1)
    {
        setIndentation(1);
    }
}

// This function allows changing the indentation level with the mouse wheel.
function changeIndentation(event)
{
    let indentation = getIndentation();
    
    if (event.deltaY < 0)
    {
        // Wheel scrolled up
        indentation++;
    }
    else if (event.deltaY > 0)
    {
        // Wheel scrolled down
        indentation--;
    }
    setIndentation(indentation);
    enforceMinimumIndentationValue();
}

// This function checks whether any of the input fields are blank.
function validateFields(useNesting = false)
{
    const myFields = document.querySelectorAll(".data");
    let myObjectArray = []; // https://stackoverflow.com/questions/15742442/declaring-array-of-objects
    
    enforceMinimumIndentationValue();

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
    function generateJSON(myData, myIndentation)
    {
        if (!myIndentation)
        {
            document.getElementById("output").innerHTML = `<pre>${JSON.stringify(myData)}</pre>`;
        }
        else
        {
            document.getElementById("output").innerHTML = `<pre>${JSON.stringify(myData, null, myIndentation)}</pre>`;
        }
    }
}