const doorImage1 = document.querySelector('#door1')
const doorImage2 = document.querySelector('#door2')
const doorImage3 = document.querySelector('#door3')
const startButton = document.querySelector('#start')

const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg'
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg'
let numClosedDoors = 3;
let openDoorA = null
let openDoorB = null
let openDoorC = null
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg'
let currentlyPlaying=true

const isBot=(door)=>{
    return door.src===botDoorPath
}

const isClicked = (door) => {
    return door.src !== closedDoorPath

}
const playDoor = (door) => {
    numClosedDoors--
    if (numClosedDoors === 0) {
        gameOver('win')
    }
    else if (isBot(door)){
        gameOver()
    }
}


const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    switch (choreDoor) {
        case 0: {
            openDoorA = botDoorPath
            openDoorB = beachDoorPath
            openDoorC = spaceDoorPath
            break
        }
        case 1: {
            {
                openDoorA = beachDoorPath
                openDoorB = spaceDoorPath
                openDoorC = botDoorPath
                break
            }
        }
        case 2: {
            openDoorA = spaceDoorPath
            openDoorB = botDoorPath
            openDoorC = beachDoorPath
            break
        }
    }
    return choreDoor;
}


doorImage1.onclick = () => {
    if (currentlyPlaying &&!isClicked(doorImage1)) {
        doorImage1.src = openDoorA
        playDoor(doorImage1)
    }
}
doorImage2.onclick = () => {
    if (currentlyPlaying &&!isClicked(doorImage2)) {
        doorImage2.src = openDoorB
        playDoor(doorImage2)
    }
}
doorImage3.onclick = () => {
    if (currentlyPlaying &&!isClicked(doorImage3)) {
        doorImage3.src = openDoorC
        playDoor(doorImage3)
    }
}
startButton.onclick = () => {
    if(!currentlyPlaying){
        startRound()
    }


}
const startRound=()=>{
    doorImage1.src=closedDoorPath
    doorImage2.src=closedDoorPath
    doorImage3.src=closedDoorPath
    numClosedDoors=3
    startButton.innerHTML='Good luck!'
    currentlyPlaying=true
    randomChoreDoorGenerator()
}

const gameOver=(status)=>{
    if(status==='win'){
        startButton.innerHTML='You win! Play again?'
    }
    else {
        startButton.innerHTML= ' Game over! Play again?'
    }
    currentlyPlaying=false
}

startRound()
