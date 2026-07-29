const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button")

buttons.forEach(function(button){
  button.addEventListener("click", function() {

    const value = button.textContent

    if (!isNaN(value)) {
      if (display.textContent === "0") {
        display.textContent = value
      }else{
        display.textContent += value
      }
    }else{

      const lastChar = display.textContent.at(-1);

      if (!isNaN(lastChar)){
        if(value === "+" || value === "-"){
          display.textContent += value;
        }
      } else {
        display.textContent = display.textContent.slice(0,-1) + value;
      }
    }
  })
})
