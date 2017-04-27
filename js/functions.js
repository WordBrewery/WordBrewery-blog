$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    accessibility: true,
  });
});


function playAudio(audioSource) {
  var audio = new Audio();
  audio.play(audioSource);
}

// Audio Factory to deal with HTML5 audio operation
function Audio() {
  var audio = document.getElementById('blogAudio');
  if (!audio) {
    audio = document.createElement('audio');
  }
  audio.setAttribute('initialized', 'true');

  var isPlaying = function () {
    return !audio.paused
  }

  this.play = function (source) {
    if (isPlaying()) {
      audio.pause()
    }

    audio.src = source;
    audio.playbackRate = 1.0;

    audio.play();
  }

  this.pause = function () {
    audio.pause();
  }
}