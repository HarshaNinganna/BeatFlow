import React, { useState } from 'react';
import './Admin.css';

function Admin({ addSong }) {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [url, setUrl] = useState('');

    const handleAddSong = () => {
        if (title && artist && url) {
            const newSong = { title, artist, url };
            addSong(newSong);
            setTitle('');
            setArtist('');
            setUrl('');
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="Admin">
            <h2>Admin Interface - Add Songs</h2>
            <div className="admin-form">
                <input
                    type="text"
                    placeholder="Song Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Artist Name"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Song URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button onClick={handleAddSong}>Add Song</button>
            </div>
        </div>
    );
}

export default Admin;
