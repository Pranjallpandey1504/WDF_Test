const video = document.getElementById('video');
const playPauseButton = document.getElementById('playPause');
const progressBar = document.getElementById('progressBar');
const muteButton = document.getElementById('mute');
const volumeControl = document.getElementById('volumeControl');
const playbackSpeedSelect = document.getElementById('playbackSpeed');
const fullscreenButton = document.getElementById('fullscreen');

playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Play';
    }
});

video.addEventListener('timeupdate', () => {
    progressBar.value = (video.currentTime / video.duration) * 100 || 0;
});

progressBar.addEventListener('input', () => {
    video.currentTime = (progressBar.value / 100) * video.duration;
});

muteButton.addEventListener('click', () => {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
});

volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value / 100;
});

playbackSpeedSelect.addEventListener('change', () => {
    video.playbackRate = parseFloat(playbackSpeedSelect.value);
});

fullscreenButton.addEventListener('click', () => {
   if (video.requestFullscreen) {
       video.requestFullscreen();
   } else if (video.webkitRequestFullscreen) { 
       video.webkitRequestFullscreen();
   } else if (video.msRequestFullscreen) {
       video.msRequestFullscreen();
   }
});
