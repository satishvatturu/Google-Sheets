const cellNamePlaceholder = document.querySelector("#active-cell");
const fontSizeInput = document.querySelector("#fontsize");
const fontFamilyInput = document.querySelector("#fontfamily");
const form = document.querySelector("#form");

let activeElement = null;

const state = {};

const defaultProperties = {
    fontFamily : "sans",
    fontSize : 16,
    color : "#000000",
    textAlign : "left", // "left", "center", "right".
    backgroundColor : "#ffffff",
    isBold : false,
    isItalic : false,
    isUnderlined : false,
    value : ''
}

function onCellFocus(event) {
    const elementId = event.target.id;
    cellNamePlaceholder.innerText = elementId;
    activeElement = event.target;
    if(state[elementId])
    {
        // already selected cell 
        // fill the options with the state of that cell
        resetOptions(state[elementId]);
    }
    else
    {
        // selected for the first time
        // fill the options with default state
        resetOptions(defaultProperties);
    }
}

function resetOptions(optionsState) {
    // Updates the UI as per the optionsState

    form.fontfamily.value = optionsState.fontFamily;
    form.fontsize.value = optionsState.fontSize;
    form.textalign.value = optionsState.textAlign; // right, left, center.
    form.bold.checked = optionsState.isBold;
    form.italic.checked = optionsState.isItalic;
    form.underlined.checked = optionsState.isUnderlined;
    form.textcolor.value = optionsState.color;
    form.bgcolor.value = optionsState.backgroundColor;
    
}


// resetOptions({
//     fontFamily : "sans",
//     fontSize : 19,
//     color : "#000",
//     textAlign : "left", // "left", "center", "right".
//     backgroundColor : "#fff",
//     isBold : false,
//     isItalic : false,
//     isUnderlined : false
// });

function onFormChange() {
    if(!activeElement)
    {
        alert("Please select a cell to make changes.")
        form.reset();
        return;
    }

    let currentState = {
        textColor : form.textcolor.value,
        backgroundColor : form.bgcolor.value,
        fontSize : form.fontsize.value,
        fontFamily : form.fontfamily.value,
        isBold : form.bold.checked,
        isItalic : form.italic.checked,
        isUnderlined : form.underlined.checked,
        textAlign : form.textalign.value,
    }

    // below function apllies all the styles to the active cell.
    applyStylesToCell(currentState);

    // Update the state object for the current cell.
    state[activeElement.id] = {...currentState, value: activeElement.innerText};
}

function applyStylesToCell(styleObject) {
    // It will take the style object and applies it to the currently selected cell.
    activeElement.style.fontSize = `${styleObject.fontSize}px`;
    activeElement.style.fontFamily = styleObject.fontFamily;
    activeElement.style.color = styleObject.textColor;
    activeElement.style.backgroundColor = styleObject.backgroundColor;
    activeElement.style.textAlign = styleObject.textAlign;
    if(styleObject.isBold)
    {
        activeElement.style.fontWeight = "bold";
    }
    else
    {
        activeElement.style.fontWeight = "normal";
    }
    if(styleObject.isItalic)
    {
        activeElement.style.fontStyle = "italic";
    }
    else
    {
        activeElement.style.fontStyle = "normal";
    }
    if(styleObject.isUnderlined)
    {
        activeElement.style.textDecoration = "underline";
    }
    else
    {
        activeElement.style.textDecoration = "none";
    }
}