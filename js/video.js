
var playPausebtn, video, progress, currentTime, totalTime;


// Video functions

function progress() {
	// Get and update time in slider
	var timeUpdate = video.currentTime * (100 / video.duration);

	// Get time for the "clock" in the video player
	var currentMin = Math.floor(video.currentTime / 60);
	var currentSec = Math.floor(video.currentTime - currentMin *  60);

	var totalMin = Math.floor(video.duration / 60);
	var totalSec = Math.floor(video.duration - totalMin * 60);

	if (currentSec < 10) {
		currentSec = "0" + currentSec;
	} if (currentMin < 10){
		currentMin = "0" + currentMin;
	}

	if (totalSec < 10) {
		totalSec = "0" + totalSec;
	} if (totalMin < 10) {
		totalMin = "0" + totalMin;
	}

 	currentTime.innerHTML = currentMin + ":" + currentSec;
 	totalTime.innerHTML = totalMin + ":" + totalSec;

}

function playPause() {
					if(video.paused){
						video.play();
					}	else {
						video.pause();
					}
}

function progresSlide(){
	var goTo = video.duration * (progressbar.value / 100);
	video.currentTime = goTo;
}




// Bind the html to the JavaScript


function loadPlayer() {
	// Get the buttons in the controllbar
	playPausebtn = document.getElementById("play");
	video = document.getElementById("video");
	progressbar = document.getElementById("progressbar");
	currentTime = document.getElementById("currentTime");
	totalTime = document.getElementById("totalTime");

	// Add eventlisteners for the buttons in the video controlbar
	video.addEventListener("timeupdate", progress);
	playPausebtn.addEventListener("click", playPause);
	progressbar.addEventListener("change", progresSlide);

}

window.onload = loadPlayer;

	

