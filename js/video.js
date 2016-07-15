
var playPausebtn, video, progressbar, curTime, totTime, volumeControl, volumeRange, fullscreen, videoPlayer, forward10, rewind10, CC, progressMeter, bufferMeter;


 $("#video-player").mouseleave(function(){
 	$(".buttons").hide();
 	$("#videocontrols").css("margin-top", "50px");
 	$("#videocontrols").css("background-color", "rgba(0, 0, 0, 0)");
 	$("#videocontrols").css("height", "10px");
 });


 $("#video-player").mouseenter(function(){
 	$(".buttons").show();
 	$("#videocontrols").show("fast");
 	$("#videocontrols").css("margin-top", "-65px");
 	$("#videocontrols").css("background-color", "rgba(0, 0, 0, 0.6)");
 	$("#videocontrols").css("height", "55px");
 });

	// Function for the progressbar
function progress() {
	// Get and update time in slider
	var timeUpdate = video.currentTime * (100 / video.duration);
    progressbar.value = timeUpdate;
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

 	curTime.innerHTML = currentMin + ":" + currentSec;
 	totTime.innerHTML = totalMin + ":" + totalSec;

 	// progress of the video will be showed in orange
 	var totalBuffered = video.buffered.end(video.buffered.length - 1);
 	var duration =  video.duration;
    if (duration > 0) {
      progressMeter.style.width = ((video.currentTime / duration)*100) + "%";
    }

    // How much how the video has been buffered
    if (duration > 0) {
    	bufferMeter.style.width = ((totalBuffered / duration)*100) + "%";
    }

}
	
	// Function for the play/pause button
function playPause() {
					if(video.paused){
						video.play();
						playPausebtn.style.background = "url(icons/pause-icon.png)";
						playPausebtn.style.backgroundRepeat = "no-repeat"; 
						playPausebtn.style.backgroundSize = "cover";     
    					playPausebtn.style.backgroundPosition = "center";
					}	else {
						video.pause();
						playPausebtn.style.background = "url(icons/play-icon.png)";
					}
}

	//function to enable the progressbar to be adjusted by user
function progresSlide(){
	var goTo = video.duration * (progressbar.value / 100);
	video.currentTime = goTo;



}

$("span").click(function() {
	var goToTranscript = $(this).attr("data-start");
	video.currentTime = goToTranscript;
});
	
	// Mute/unmute video when clicking the volume-icon
function mute(){
	if (video.muted){
		video.muted = false;
		volumeRange.value = 100;
		volumeControl.style.background = "url(icons/volume-on-icon.png)"; 
		volumeControl.style.backgroundRepeat = "no-repeat"; 
		volumeControl.style.backgroundSize = "cover";     
		volumeControl.style.backgroundPosition = "center";
	} else {
		video.muted = true;
		volumeRange.value = 0;
		volumeControl.style.background = "url(icons/volume-off-icon.png)"; 
		volumeControl.style.backgroundRepeat = "no-repeat"; 
		volumeControl.style.backgroundSize = "cover";     
		volumeControl.style.backgroundPosition = "center";
	}
}

	// The Volumebar 
function volumeChange() {
	video.volume = volumeRange.value / 100;
}

	// enter fullscreen when clicking the button
function goFullscreen(){
	if(videoPlayer.requestFullscreen){
		videoPlayer.requestFullscreen();
		videoPlayer.style.maxWidth = "none";
			} 
	else if (videoPlayer.webkitRequestFullscreen) {
		videoPlayer.webkitRequestFullscreen();
		videoPlayer.style.maxWidth = "none";
		
	} else {
		videoPlayer.mozRequestFullscreen();	
		videoPlayer.style.maxWidth = "none";	
	}
}	


	// Show volumeslider on volumeControl hover, and hide again if mouse leave

function volSliderShow() {
	volumeRange.style.display = 'inline-block';

	volumeRange.addEventListener("mouseout", function(){
		setTimeout(function() {
  			volumeRange.style.display = "none";
		}, 500);
	});	
}	

function subtitles() {
	if(video.textTracks[0].mode = "hidden") {
		video.textTracks[0].mode = "visible";
	} else {
		video.textTracks[0].mode = "hidden";
	}
}


	// rewind 10 seconds
function rewind() {
	video.currentTime -= 10 ; 
}

	// forward 10 seconds
function forward() {
	video.currentTime += 10;
}



	// Make the transcript color based on current location in the video, making it easy for a user to read along. 
function transcript() {
	function addTranscriptClass(time){
		$('span[data-start]').removeClass("transcriptActive");
		$('span[data-start="' + time + '"]').addClass("transcriptActive");
	}

	if(video.currentTime >= 0 && video.currentTime < 4.13 ){
		addTranscriptClass(0);
	} else if(video.currentTime > 4.13 && video.currentTime < 7.535) {
		addTranscriptClass(4.13);
	} else if(video.currentTime > 7.535 && video.currentTime < 11.27) {
		addTranscriptClass(7.535);
	} else if(video.currentTime > 11.27 && video.currentTime < 13.96){
		addTranscriptClass(11.27);
	} else if(video.currentTime > 13.96 && video.currentTime < 17.94) {
		addTranscriptClass(13.96);
	} else if(video.currentTime >17.94 && video.currentTime < 22.37) {
		addTranscriptClass(17.94);
	} else if(video.currentTime > 22.37 && video.currentTime < 26.88){
		addTranscriptClass(22.37);
	} else if(video.currentTime > 26.88 && video.currentTime < 30.92) {
		addTranscriptClass(26.88);
	} else if(video.currentTime > 30.92 && video.currentTime < 34.73) {
		addTranscriptClass(32.1);
	} else if(video.currentTime > 34.73 && video.currentTime < 39.43){
		addTranscriptClass(34.73);
	} else if(video.currentTime > 39.43 && video.currentTime < 41.19){
		addTranscriptClass(39.43);
	} else if(video.currentTime > 41.19 && video.currentTime < 46.3) {
		addTranscriptClass(41.19);
	} else if(video.currentTime > 46.3 && video.currentTime < 49.27) {
		addTranscriptClass(46.3);
	} else if(video.currentTime > 49.27 && video.currentTime < 53.76) {
		addTranscriptClass(49.27);
	} else if(video.currentTime > 53.76 && video.currentTime < 57.78){
		addTranscriptClass(53.76);
	} else if(video.currentTime > 57.78) {
		addTranscriptClass(57.78);
	}
}







// Bind the html to the JavaScript


function loadPlayer() {
	// Get the buttons in the controllbar
	playPausebtn = document.getElementById("play");
	video = document.getElementById("video");
	progressbar = document.getElementById("progressbar");
	curTime = document.getElementById("currentTime");
	totTime = document.getElementById("totalTime");
	volumeControl = document.getElementById("volumeControl");
	volumeRange = document.getElementById("volumeRange");
	fullscreen = document.getElementById("fullscreen");
	videoPlayer = document.getElementById("video-player");
	forward10 = document.getElementById("forward10");
	rewind10 = document.getElementById("rewind10");
	CC = document.getElementById("CC");
	progressMeter = document.getElementById("progressMeter");
	bufferMeter = document.getElementById("bufferMeter");

	// Add eventlisteners for the buttons in the video controlbar
	video.addEventListener("timeupdate", progress);
	video.addEventListener("timeupdate", transcript);
	playPausebtn.addEventListener("click", playPause);
	progressbar.addEventListener("change", progresSlide);
	volumeControl.addEventListener("click", mute);
	volumeRange.addEventListener("change", volumeChange);
	fullscreen.addEventListener("click", goFullscreen);
	forward10.addEventListener("click", forward);
	rewind10.addEventListener("click", rewind);
	volumeControl.addEventListener("mouseenter", volSliderShow);
	CC.addEventListener("click", subtitles);




}

window.onload = loadPlayer;

	

