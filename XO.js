const startButton = document.getElementById("startButton")

let player1
let player2

startButton.addEventListener("click",player1Name)
startButton.addEventListener("click",player2Name)
startButton.addEventListener("click", () => console.log(player1))
startButton.addEventListener("click", () => console.log(player2))
// توی همین مورد پایین، فانکشن مخفی کردنش هم کال کردم:
startButton.addEventListener("click",checkInput)


// اسم پلیر های وارد شده رو خروجی میده:
function player1Name(){
  player1 = document.getElementById("player1").value
  return player1
}
function player2Name(){
  player2 = document.getElementById("player2").value
  return player2
}

let usernames = document.getElementById("userNames")
let container = document.getElementById("container")
let restartButton = document.getElementById("restartButton")

// چک میکنه اگه اسم هارو وارد نکردن هشدار میده
let alarm = document.getElementById("noInput")
let Input = false
function checkInput(){

  // ترتیب این ایف ها مهمه تو منطق اش
  if (player2 == ""){
    alarm.innerHTML = "You didn't enter second player's name !"
  }
  if(player1 == ""){
    alarm.innerHTML = "You didn't enter first player's name !"
  }
  if (player1=="" && player2==""){
    alarm.innerHTML = "You didn't enter players name !"
  }
  if(player1 !=="" && player2 !==""){
    hideUserNames()
    showXO()
  }
}
// باکس سبز اسم پلیر هارو میبنده:
function hideUserNames(){
    usernames.style.visibility = "hidden"
}
// صفحه ی بازی رو میاره:
function showXO(){
    container.style.visibility = "visible"
    restartButton.style.visibility = "visible"
}




// کد های بازی:

let XorO = 0

let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let box5 = document.getElementById("box5")
let box6 = document.getElementById("box6")
let box7 = document.getElementById("box7")
let box8 = document.getElementById("box8")
let box9 = document.getElementById("box9")


let boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9]


for(let box of boxes){
  box.addEventListener("click", XO)
  box.addEventListener("click", checkIfX)
  box.addEventListener("click", checkWinner)
}

// صفر به معنی ایکس است و یک به معنی او است
function XO(){

if(XorO == 0){
  if(this.innerHTML !=="O"){
    this.innerHTML ="X"
    XorO = 1;
  }
  }
  else{
    if(this.innerHTML !=="X")
      this.innerHTML ="O"
      XorO = 0;
    }
}
// واقعا خودم هم نمیدونم چجوری تابع زیر کمک میکنه
// ولی بدون این نمیشه
function checkIfX(){
  if (XorO ==1){
    XorO = 1
  }
}

function checkWinner(){
  // چک کردن حالت های برنده ی ایکس
  if (box1.innerHTML =="X" && box2.innerHTML =="X" && box3.innerHTML =="X"){
    showWinner1()  
  }
  if (box4.innerHTML =="X" && box5.innerHTML =="X" && box6.innerHTML =="X"){
    showWinner1()
  }  
  if (box7.innerHTML =="X" && box8.innerHTML =="X" && box9.innerHTML =="X"){
    showWinner1()
  }
  if (box1.innerHTML =="X" && box4.innerHTML =="X" && box7.innerHTML =="X"){
    showWinner1()
  }
  if (box2.innerHTML =="X" && box5.innerHTML =="X" && box8.innerHTML =="X"){
    showWinner1()
  }
  if (box3.innerHTML =="X" && box6.innerHTML =="X" && box9.innerHTML =="X"){
    showWinner1()
  }
  if (box1.innerHTML =="X" && box5.innerHTML =="X" && box9.innerHTML =="X"){
    showWinner1()
  }
  if (box3.innerHTML =="X" && box5.innerHTML =="X" && box7.innerHTML =="X"){
    showWinner1()
  }
   // چک کردن حالت های برنده ی او
  if (box1.innerHTML =="O" && box2.innerHTML =="O" && box3.innerHTML =="O"){
    showWinner2()
  }
  if (box4.innerHTML =="O" && box5.innerHTML =="O" && box6.innerHTML =="O"){
    showWinner2()
  }
  if (box7.innerHTML =="O" && box8.innerHTML =="O" && box9.innerHTML =="O"){
    showWinner2()
  }
  if (box1.innerHTML =="O" && box4.innerHTML =="O" && box7.innerHTML =="O"){
    showWinner2()
  }
  if (box2.innerHTML =="O" && box5.innerHTML =="O" && box8.innerHTML =="O"){
    showWinner2()
  }
  if (box3.innerHTML =="O" && box6.innerHTML =="O" && box9.innerHTML =="O"){
    showWinner2()
  }
  if (box1.innerHTML =="O" && box5.innerHTML =="O" && box9.innerHTML =="O"){
    showWinner2()
  }
  if (box3.innerHTML =="O" && box5.innerHTML =="O" && box7.innerHTML =="O"){
    showWinner2()
  }
}

let winner = document.getElementById("winner")

function showWinner1(){
  winner.innerHTML = `${player1} won!`
  winner.style.visibility = "visible"
}
function showWinner2(){
  winner.innerHTML = `${player2} won!`
  winner.style.visibility = "visible"
}

let restart = document.getElementById("restartImg")

restart.addEventListener("click", reMach)

function reMach(){
  for (let box of boxes){
    box.innerHTML = ""
  }
  winner.style.visibility = "hidden"
}










