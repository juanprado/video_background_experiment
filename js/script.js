$(document).ready(function() {
	$('body').videoBG({
		position:"fixed",
		zIndex:0,
		mp4:'video/dippity.mp4',
		ogv:'video/dippity.ogv',
		webm:'video/dippity.webm',
		poster:'video/dippity.jpg',
		opacity:1,
		loop:3,
		fullscreen:true,
	});
})

function play_pause(){
  var video = $('video');
  if(video[0].paused){
       video[0].play();
    }
    else {
       video[0].pause();
    }
  return false;
}

function mute(){
  var video = $('video');
  video[0].muted = !video[0].muted;
  return false; 
}

function get_time(){
  var video = $('video');
  $('#current').text(video[0].currentTime);
}