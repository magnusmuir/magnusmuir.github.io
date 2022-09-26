var songList = [{
    title:"01. Cariodrome",
    filePath:"music/01Cairodrome.m4a"
},
{
    title:"02. Cardinal Dancer",
    filePath:"music/02CardinalDancer.m4a"
},
{
    title:"03. Cold Comfort",
    filePath:"music/03ColdComfort.m4a"
},
{
    title:"04. DOH-T",
    filePath:"music/04DOH-T.m4a"
},
{
    title:"05. Messij",
    filePath:"music/05Messij.m4a"
},
{
    title:"06. Operatique",
    filePath:"music/06Operatique.m4a"
},
{
    title:"07. Tentative",
    filePath:"music/07Tentative.m4a"
},
{
    title:"08. Trancevaal",
    filePath:"music/08Trancevaal.m4a"
}]

// I made a list of objects of the songs I will using in my tracklist

var audioPlayer = document.createElement("audio")
audioPlayer.src = songList[0].filePath

// this sets the first song to the one the plays when play is pressed


function loadTrack(title) {
    playButton.innerText="pause"
    const song = songList.find(obj=>obj.title==title)

    audioPlayer.src = song.filePath
    audioPlayer.play()
}

// This function helps to identify which song corresponds to which button

const musicButtons = document.querySelectorAll(".songButton")

musicButtons.forEach(function (button) {
    button.onclick = function (event) {
       const songName = event.target.innerText
       loadTrack(songName)
        
    }
})

// This tells the browser that everytime a button is clicked it finds the text title of the button and matches it up to the file name

let timerWrapper = document.getElementsByClassName("progressbar")[0]
let timerBar = document.getElementsByClassName("progress")[0]

// this is finding the progressbar element in my html

function setTime() {
    console.log("Update")

    let barWidth = timerWrapper.clientWidth * (audioPlayer.currentTime/audioPlayer.duration);
    timerBar.style.width = barWidth.toString()+"px"

}

audioPlayer.addEventListener("timeupdate",setTime)

// this extends the length of the progress bar when the time moves forward and is being called every time the song moves forward

let playButton = document.getElementById("playButton")


function setPlay() {
    if (audioPlayer.paused) {
        audioPlayer.play()
        playButton.innerText="pause"
    } else {
        audioPlayer.pause()
        playButton.innerText="play"
    }
    
}

// this changes the text of the button for play/pause

function timeTravel(sec) {
    audioPlayer.currentTime = audioPlayer.currentTime + sec
}

playButton.onclick = setPlay

let backButton = document.getElementById("bwdButton")
let forwardButton = document.getElementById("fwdButton")

backButton.onclick = function() {
    timeTravel(-5)
}

forwardButton.onclick = function() {
    timeTravel(5)
}

// this function moves the song forward or backward by 5 seconds