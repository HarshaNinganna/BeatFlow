<?php
// Start the session to store songs
session_start();

// Initialize an empty array for storing songs
$songs = [];

// Handle the form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $musicPoster = $_POST['musicPoster'];
    $musicDirector = $_POST['musicDirector'];
    $year = $_POST['year'];
    $productionBanner = $_POST['productionBanner'];
    $songFile = $_POST['songFile'];

    // Create an associative array for the song
    $newSong = [
        'poster' => $musicPoster,
        'director' => $musicDirector,
        'year' => $year,
        'banner' => $productionBanner,
        'songFile' => $songFile
    ];

    // Store the new song in the session
    if (!isset($_SESSION['songs'])) {
        $_SESSION['songs'] = [];
    }
    $_SESSION['songs'][] = $newSong;

    // Redirect to the same page to prevent resubmission of the form
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

// Retrieve the stored songs from the session
if (isset($_SESSION['songs'])) {
    $songs = $_SESSION['songs'];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BeatFlow - Admin Panel</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="admin_style.css"> <!-- Ensure this file exists -->
    <style>
        .hidden { display: none; }
        .modal { display: none; /* Hidden by default */ }
        .modal-content { /* Style your modal here */ }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="bg-dark text-white text-center p-4">
        <h1>BeatFlow Admin</h1>
        <button id="addSongBtn" class="btn btn-primary">Add Song</button>
        <button id="viewSongsBtn" class="btn btn-secondary">View Added Songs</button>
    </header>

    <!-- Add Song Form -->
    <section id="add-song-form" class="hidden p-4">
        <h2>Add New Song</h2>
        <form id="songForm" method="POST" action="">
            <div class="form-group">
                <label for="musicPoster">Music Poster (Image URL):</label>
                <input type="text" class="form-control" id="musicPoster" name="musicPoster" required>
            </div>

            <div class="form-group">
                <label for="musicDirector">Music Director:</label>
                <input type="text" class="form-control" id="musicDirector" name="musicDirector" required>
            </div>

            <div class="form-group">
                <label for="year">Year of Composition:</label>
                <input type="number" class="form-control" id="year" name="year" required>
            </div>

            <div class="form-group">
                <label for="productionBanner">Production Banner:</label>
                <input type="text" class="form-control" id="productionBanner" name="productionBanner" required>
            </div>

            <div class="form-group">
                <label for="songFile">Song (MP3 URL):</label>
                <input type="text" class="form-control" id="songFile" name="songFile" required>
            </div>

            <button type="submit" class="btn btn-success">Add Song</button>
        </form>
    </section>

    <!-- List of Songs -->
    <section id="song-list-section" class="hidden p-4">
        <h2>Added Songs</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Sl. No</th>
                    <th>Music Poster</th>
                    <th>Music Director</th>
                    <th>Year of Composition</th>
                    <th>Production Banner</th>
                    <th>Song</th>
                </tr>
            </thead>
            <tbody>
                <?php if (!empty($songs)): ?>
                    <?php foreach ($songs as $index => $song): ?>
                        <tr>
                            <td><?php echo $index + 1; ?></td>
                            <td><img src="<?php echo htmlspecialchars($song['poster']); ?>" alt="Music Poster" style="width: 50px; height: 50px;"></td>
                            <td><?php echo htmlspecialchars($song['director']); ?></td>
                            <td><?php echo htmlspecialchars($song['year']); ?></td>
                            <td><?php echo htmlspecialchars($song['banner']); ?></td>
                            <td><a href="<?php echo htmlspecialchars($song['songFile']); ?>" class="btn btn-info" target="_blank">Play Song</a></td>
                        </tr>
                    <?php endforeach; ?>
                <?php else: ?>
                    <tr><td colspan="6" class="text-center">No songs added yet.</td></tr>
                <?php endif; ?>
            </tbody>
        </table>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center p-3">
        <p>&copy; 2024 BeatFlow Admin Panel</p>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        document.getElementById('addSongBtn').addEventListener('click', function() {
            document.getElementById('add-song-form').classList.toggle('hidden');
            document.getElementById('song-list-section').classList.add('hidden');
        });

        document.getElementById('viewSongsBtn').addEventListener('click', function() {
            document.getElementById('song-list-section').classList.toggle('hidden');
            document.getElementById('add-song-form').classList.add('hidden');
        });
    </script>
</body>
</html>
