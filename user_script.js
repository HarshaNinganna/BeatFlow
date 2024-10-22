document.addEventListener("DOMContentLoaded", function () {
    const songGrid = document.getElementById("songGrid");
    const songModal = document.getElementById("songModal");
    const closeModal = document.getElementById("closeModal");
    const modalPoster = document.getElementById("modalPoster");
    const modalTitle = document.getElementById("modalTitle");
    const modalDirector = document.getElementById("modalDirector");
    const modalYear = document.getElementById("modalYear");
    const modalBanner = document.getElementById("modalBanner");

    // Fetch songs from localStorage (this simulates fetching from admin panel or database)
    let songs = JSON.parse(localStorage.getItem('songs')) || [];

    // Function to render songs in the UI
    function renderSongs() {
        songGrid.innerHTML = '';  // Clear previous content
        songs.forEach((song, index) => {
            const songItem = document.createElement("div");
            songItem.classList.add("song-item");
            songItem.innerHTML = `
                <img src="${song.poster}" alt="${song.title}">
                <h3>${song.title}</h3>
                <button class="descriptionBtn" data-index="${index}">Description</button>
            `;
            songGrid.appendChild(songItem);
        });
        attachEventListeners();
    }

    // Show modal with song details
    function showModal(index) {
        const song = songs[index];
        modalPoster.src = song.poster;
        modalTitle.innerText = song.title;
        modalDirector.innerText = `Director: ${song.director}`;
        modalYear.innerText = `Year: ${song.year}`;
        modalBanner.innerText = `Production Banner: ${song.banner}`;
        songModal.style.display = "block";
    }

    // Attach event listeners to description buttons
    function attachEventListeners() {
        document.querySelectorAll(".descriptionBtn").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                showModal(index);
            });
        });
    }

    // Close modal
    closeModal.addEventListener("click", () => {
        songModal.style.display = "none";
    });

    // Music Player controls (dummy, implement logic as needed)
    document.getElementById("playPauseBtn").addEventListener("click", function () {
        // Implement play/pause logic here
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
        // Implement next song logic here
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
        // Implement previous song logic here
    });

    // Add to favorites, playlist, download logic (for future implementation)
    document.getElementById("addToFavoritesBtn").addEventListener("click", function () {
        // Logic to add to favorites
    });

    document.getElementById("addToPlaylistBtn").addEventListener("click", function () {
        // Logic to add to playlist
    });

    document.getElementById("downloadBtn").addEventListener("click", function () {
        // Logic to download song
    });

    // Initially render the songs added by the admin
    renderSongs();
});
