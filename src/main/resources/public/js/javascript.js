  //When the user clicks on the button, 
  //toggle between hiding and showing the dropdown content */
function chooserBtn(){
    document.getElementById("beginDropdown").classList.toggle("show");


// When the User clicks away from the dropdown menu, close the menu
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

  function getZip(){
    var zipField = document.getElementById("zip");
    var typeField = document.getElementByName("type");
    var typeVal = typeField.options[typeField.selectedIndex].value;    
        if (typeVal === "Local") {
            zipField.visibility = "visible";
        }
        else {
            zipField.visibility = "hidden";
        }
  }
}

