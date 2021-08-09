let nextStep = 0
let maxStep = 0
let p = document.getElementById('player')

function step(obj) {
    let id = obj.id
    btnn = document.getElementById(id)
    if (nextStep % 2 == 0){
        document.getElementById(id).innerText = 'x'
        btnn.className = 'btn krestik'
        btnn.setAttribute('disabled', 'false')
        p.className = 'player1'
        p.innerText = 'Ход нолика'
    }else{
        document.getElementById(id).innerText = 'o'
        btnn.className = 'btn nolik'
        btnn.setAttribute('disabled', 'false')
        p.className = 'player2'
        p.innerText = 'Ход крестика'
    }
    maxStep++
    nextStep++
    winChecker()
    drawChecker()
}

function winChecker() {
    btn = document.getElementsByClassName('btn')
    const winPos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]]

    for(i = 0; i < winPos.length; i++){
        if(btn[winPos[i][0]].innerText == 'x' && btn[winPos[i][1]].innerText == 'x' && btn[winPos[i][2]].innerText == 'x'){
            alert('Крестики')
            restart()
        }
    }
    for(i = 0; i < winPos.length; i++){
        if(btn[winPos[i][0]].innerText == 'o' && btn[winPos[i][1]].innerText == 'o' && btn[winPos[i][2]].innerText == 'o'){
            alert('Нолики')
            restart()
        }
    }
}

function drawChecker() {
    if (maxStep > 8){
        for(i = 0; i < 9; i++){
            document.getElementById(i).innerText = ''
            document.getElementById(i).className = 'no-active-btn btn'
            document.getElementById(i).removeAttribute('disabled')
            nextStep = 0
        }
    restart()
    alert(123)
    maxStep = 0
    }
}

function restart() {
    p.innerText = 'Ход крестика'
    p.className = 'player2'
    nextStep = 0
    maxStep = 0
    for(i = 0; i < 9; i++){
        console.log(123)
        document.getElementById(i).innerText = ''
        document.getElementById(i).className = 'no-active-btn btn'
        document.getElementById(i).removeAttribute('disabled')
    }
}