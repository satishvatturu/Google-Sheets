let data = {
    name : "Satish",
    age : "24",
    college : "something",
    role : "Dev",
    company : "Acciojob"
}

const a = document.querySelector("a");

function createAndDownloadFile() {
    let fileData = JSON.stringify(data);
 
    // Creating file
    let file = new Blob([fileData], {type: "application/json"});
    let url = window.URL.createObjectURL(file); //it creates a url with file data instantly.
    a.href = url;
}

// function Temp() {
//     // creates an empty object inside the function (when we use new operator in front of invocation)
//     // {} => #400.
//     // if a function starts with capital letter it is a constructor function.
//     // this key word revers to the newly created object. this == #400.
//     // console.log("object");
//     this.name = "Vatturu"; //#400 = {name : "Vatturu"}
// }
// let x = new Temp(); // x = #44
// // x is an instance of Temp()
// console.log(x); //undefined