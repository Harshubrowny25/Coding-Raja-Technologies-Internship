// alert("loading")
function addNewWEField() {
    // console.log("Adding New Field")
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
  
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");
  
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
  
    weOb.insertBefore(newNode, weAddButtonOb);
  }
  function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
  
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");
  
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
  
    aqOb.insertBefore(newNode, aqAddButtonOb);
  }
  
  //generating cv
  function generateCV() {
    // console.log("generating CV");
  
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    let nameT2 = document.getElementById("nameT2");
    nameT2.innerHTML = nameField;
    //image
    // document.getElementById("imgT").innerHTML =
    //   document.getElementById("imageField").src;
  
    //contact
    document.getElementById("contactT").innerHTML =
      document.getElementById("contactField").value;
    //address
    document.getElementById("addressT").innerHTML =
      document.getElementById("addressField").value;
    //facebook
    document.getElementById("fbT").innerHTML =
      document.getElementById("fbField").value;
    //insta
    document.getElementById("instaT").innerHTML =
      document.getElementById("instaField").value;
    //linkedin
    document.getElementById("linkedT").innerHTML =
      document.getElementById("linkedField").value;
    //objective
    document.getElementById("ObjectiveT").innerHTML =
      document.getElementById("ObjectiveField").value;
    //we
    let wes = document.getElementsByClassName("weField");
  
    let str = "";
  
    for (let e of wes) {
      str = str + `<li> ${e.value} </li>`;
    }
  
    document.getElementById("weT").innerHTML = str;
    //aq
    let aqs = document.getElementsByClassName("eqField");
  
    let str1 = "";
  
    for (let e of aqs) {
      str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;
  
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
  }
  
  // document.getElementsByClassName("myImg")[0].src =
  //   document.getElementById("imageField");
  
  // const mainForm = document.getElementById("cv-form");
  // let imageElem = mainForm.image;
  // let imageDsp = document.getElementById("myImg");
  // // function previewImage() {
  // let oFReader = new FileReader();
  // oFReader.readAsDataURL(imageElem.files[0]);
  // oFReader.onload = function (ofEvent) {
  //   imageDsp.src = ofEvent.target.result;
  // };
  
  // document.getElementsByClassName("myImg")[0].src =
  //   document.getElementById("imageField");
  // }
  
  //print cv
  function printCV() {
    window.print();
  }
  
  // // regex for validation
  // const strRegex = /^[a-zA-Z\s]*$/; // containing only letters
  // const emailRegex =
  //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // const phoneRegex =
  //   /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  // /* supports following number formats - (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
  // const digitRegex = /^\d+$/;
  
  // const mainForm = document.getElementById("cv-form");
  
  // let imageElem = mainForm.image;
  // let imageDsp = document.getElementById("image_dsp");
  // function previewImage() {
  //   let oFReader = new FileReader();
  //   oFReader.readAsDataURL(imageElem.files[0]);
  //   oFReader.onload = function (ofEvent) {
  //     imageDsp.src = ofEvent.target.result;
  //   };
  //   document.getElementsByClassName("myImg")[0].src =
  //     document.getElementById("imageField");
  // }