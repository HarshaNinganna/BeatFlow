// Sample Playlist
const playlist = [
    { title: "Song 1", src: "assets/music/song1.mp3" },
    { title: "Song 2", src: "assets/music/song2.mp3" },
    { title: "Song 3", src: "assets/music/song3.mp3" }
];

// Variables
const audio = new Audio();
const titleDisplay = document.getElementById('current-song-title');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const songList = document.getElementById('song-list');

let currentSongIndex = 0;

// Load the first song
loadSong(currentSongIndex);

// Load song function
function loadSong(index) {
    audio.src = playlist[index].src;
    titleDisplay.textContent = `Now Playing: ${playlist[index].title}`;
    audio.load(); // Load the new song
}

// Play song function
function playAudio() {
    audio.play();
    playButton.disabled = true; // Disable play button while playing
    pauseButton.disabled = false; // Enable pause button
}

// Pause song function
function pauseAudio() {
    audio.pause();
    playButton.disabled = false; // Enable play button
    pauseButton.disabled = true; // Disable pause button
}

// Stop song function
function stopAudio() {
    audio.pause();
    audio.currentTime = 0; // Reset to start
    playButton.disabled = false; // Enable play button
    pauseButton.disabled = true; // Disable pause button
}

// Load song on list item click
function loadSong(src) {
    audio.src = src;
    playAudio(); // Automatically play the song
}

// Populate the playlist in the UI
function populatePlaylist() {
    playlist.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.onclick = () => {
            currentSongIndex = index;
            loadSong(song.src);
        };
        songList.appendChild(li);
    });
}

// Initialize playlist in UI
populatePlaylist();
