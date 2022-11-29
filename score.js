const btnOne = document.getElementById("btnOne")
const btnTwo = document.getElementById("btnTwo")
const btnThree = document.getElementById("btnThree")
const btnO = document.getElementById("btnO")
const btnTw = document.getElementById("btnTw")
const btnThr = document.getElementById("btnThr")
const resetBtn = document.getElementById("reset-btn")
let homeScore = 0
let homeWindow = document.getElementById("homeWindow")
let guestScore = 0
let guestWindow = document.getElementById("guestWindow")



function increaseHomeScoreOne(){
    homeScore += 1
    homeWindow.textContent = homeScore
}

btnOne.addEventListener("click", increaseHomeScoreOne)

function increaseHomeScoreTwo(){
    homeScore += 2
    homeWindow.textContent = homeScore
}

btnTwo.addEventListener("click", increaseHomeScoreTwo)

function increaseHomeScoreThree(){
    homeScore += 3
    homeWindow.textContent = homeScore
}

btnThree.addEventListener("click", increaseHomeScoreThree)


function increaseGuestScoreOne(){
    guestScore += 1
    guestWindow.textContent = guestScore
}

btnO.addEventListener("click", increaseGuestScoreOne)

function increaseGuestScoreTw(){
    guestScore += 2
    guestWindow.textContent = guestScore
}

btnTw.addEventListener("click", increaseGuestScoreTw)

function increaseGuestScoreThr(){
    guestScore += 3
    guestWindow.textContent = guestScore
}

btnThr.addEventListener("click", increaseGuestScoreThr)

function newGame() {
    guestScore = 0
    homeScore = 0
    guestWindow.textContent = guestScore
    homeWindow.textContent = homeScore
}

resetBtn.addEventListener("click", newGame)