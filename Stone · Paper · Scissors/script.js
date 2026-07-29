generateRobotsChoice();

function generateRobotsChoice(){
  const choices = ["Stone","Paper","Scisoor"];
  const i = Math.floor(Math.random() * choices.length)
  let robotsChoice = choices[i]
  console.log(robotsChoice)
}

let score = 0;
let robotsChoice = ""
let usersChoice = ""

const buttons = document.querySelectorAll(buttons)
button.forEach(button => {
  console.log(button)
});
