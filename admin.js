// admin.js

// Function to add a song to the list
document.getElementById('add-song-btn').addEventListener('click', function () {
    const songTitle = document.getElementById('song-title').value;
    const songURL = document.getElementById('song-url').value;

    if (songTitle && songURL) {
        // Create a new list item
        const newSong = document.createElement('li');
        newSong.textContent = songTitle;

        // Create a button to load the song in the user interface
        newSong.addEventListener('click', function () {
            loadSong(songURL);
            alert(`${songTitle} is now playing!`);
        });

        // Append to the current songs list
        document.getElementById('current-songs').appendChild(newSong);

        // Reset input fields
        document.getElementById('song-title').value = '';
        document.getElementById('song-url').value = '';
    } else {
        alert('Please fill in both fields.');
    }
});

// Function to load a song into the user interface
function loadSong(songURL) {
    // Save the URL in localStorage to access it in the user interface
    localStorage.setItem('currentSong', songURL);
}
