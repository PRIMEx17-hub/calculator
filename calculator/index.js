let calEL = document.getElementById("cal-el")

let cal = 0

function display1() 
{
   cal += "1"
   calEL.innerText = cal
}

function display2() 
{
   cal += "2"
   calEL.innerText = cal
}

function display3() 
{
   cal += "3"
   calEL.innerText = cal
}

function display4() 
{
   cal += "4"
   calEL.innerText = cal
}

function display5() 
{
   cal += "5"
   calEL.innerText = cal
}

function display6() 
{
   cal += "6"
   calEL.innerText = cal
}

function display7() 
{
   cal += "7"
   calEL.innerText = cal
}

function display8() 
{
   cal += "8"
   calEL.innerText = cal
}

function display9() 
{
   cal += "9"
   calEL.innerText = cal
}

function display() 
{
   cal += "0"
   calEL.innerText = cal
}

function displayp() 
{
   cal += "+"
   calEL.innerText = cal
}

function displaym() 
{
   cal += "-"
   calEL.innerText = cal
}

function displayd() 
{
   cal += "/"
   calEL.innerText = cal
}

function displayx() 
{
   cal += "*"
   calEL.innerText = cal
}

function equal()
{
   cal = eval(cal)
   calEL.innerText = cal
}