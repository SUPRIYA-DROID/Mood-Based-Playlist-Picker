const playlists = {
    HAPPY: [
        { title: "Walking on Sunshine", artist: "Katrina & The Waves" },
        { title: "Happy", artist: "Pharrell Williams" },
        { title: "Good Vibrations", artist: "Beach Boys" },
        { title: "Don't Stop Me Now", artist: "Queen" },
                { title: "I Gotta Feeling", artist: "Black Eyed Peas" },
        { title: "Can't Stop the Feeling!", artist: "Justin Timberlake" },
        { title: "Dancing Queen", artist: "ABBA" },
        { title: "Lovely Day", artist: "Bill Withers" }
    ],
    SAD: [
        { title: "Someone Like You", artist: "Adele" },
        { title: "Yesterday", artist: "The Beatles" },
        { title: "Nothing Compares 2 U", artist: "Sinead O'Connor" },
        { title: "Hurt", artist: "Johnny Cash" },
        { title: "Everybody Hurts", artist: "R.E.M." },
        { title: "Fix You", artist: "Coldplay" },
        { title: "With or Without You", artist: "U2" },
        { title: "All By Myself", artist: "Celine Dion" }
    ],
    LOVE: [
        { title: "Eye of the Tiger", artist: "Survivor" },
        { title: "Can't Hold Us", artist: "Macklemore" },
        { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars" },
        { title: "Don't Stop Believin'", artist: "Journey" },
        { title: "Lose Yourself", artist: "Eminem" },
        { title: "Stronger", artist: "Kanye West" },
        { title: "We Will Rock You", artist: "Queen" },
        { title: "Get Lucky", artist: "Daft Punk ft. Pharrell Williams" }
    ],
    DANCE: [
        { title: "Somewhere Only We Know", artist: "Keane" },
        { title: "Perfect Day", artist: "Lou Reed" },
        { title: "Dreams", artist: "Fleetwood Mac" },
        { title: "Breathe Me", artist: "Sia" },
        { title: "Let Her Go", artist: "Passenger" },
        { title: "Banana Pancakes", artist: "Jack Johnson" },
        { title: "The Scientist", artist: "Coldplay" },
        { title: "Come Away With Me", artist: "Norah Jones" }
    ]
};

function showSlide(slideId) {
    // Hide the active slide
    document.querySelector('.slide.active').classList.remove('active');

    // Show the requested slide
    document.getElementById(slideId).classList.add('active');
}

function selectMood(mood) {
    // Clear previous songs
    const container = document.getElementById('song-container');
    container.innerHTML = '';

    // Update the playlist title
    document.getElementById('playlist-title').textContent = `Your ${mood.charAt(0).toUpperCase() + mood.slice(1)} Playlist`;

    // Add songs to the container
    playlists[mood].forEach(song => {
        const div = document.createElement('div');
        div.className = 'song';
        div.innerHTML = `
            <div>
                <strong>${song.title}</strong>
                <div>${song.artist}</div>
            </div>
            <span>♥</span>
        `;
        container.appendChild(div);
    });

    // Show the playlist slide
    showSlide('playlist');
}

