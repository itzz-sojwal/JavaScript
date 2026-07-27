const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button")

buttons.forEach(function(button){
  button.addEventListener("click", function() {

    const value = button.textContent

    if(!isNaN(value)){
      if(display.textContent === "0"){
        display.textContent = value
      }else{
        display.textContent += value
      }
    }
  })
})
