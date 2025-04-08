const audio = document.getElementById('myAudio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');


function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}


audio.addEventListener('loadedmetadata', () => {
  progressBar.max = audio.duration;
  durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  progressBar.value = audio.currentTime;
  currentTimeEl.textContent = formatTime(audio.currentTime);
});


playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playPauseBtn.textContent = '▶️';
  }
});


progressBar.addEventListener('input', () => {
  audio.currentTime = progressBar.value;
});