// components/Recommendation.js
import React, { useState } from 'react';

const links = {
    BL: "https://media-hosting.imagekit.io//f4192063a6424743/bl.png?Expires=1832631021&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MAxlxjI8vp-oLHvQsXcGdE6hG00QAPSdik18vFbDhsIG0JQJDkM4420R9jjlD4PaOQUh1eU~lpDsxyUARi7XoB9R7CPb3QUhxDxsAuZA75ZepPYkTDwL~vjffXQc4fcUQM-2LK2aWVo2nVtHDbwdsa6~ja-lgaG~s1fhLZ-QoNO3PZqCXDJ-4v2nISTyWOLIVXq09e6JU2K0WgjeLIngScwWHlFiKAs98RU0GBs7QgAMCysTXYwzsHFr704sBK9MN~GeYg0X6SWZyEA4dN2I8nKyrQ3WOL-xNFGKWK7bW9P75nyzjXDmpBP8kQRTRW1sPHPgdOk78gY1T2s1PmHl5w__",
    LV: "https://media-hosting.imagekit.io//ae33b906acab4162/lv.jpg?Expires=1832631021&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AI3srQKNQhZhhE1pULKk5ehQyliHLnOmhdDjnhi-JGNAdbxtIqyp-6C0W8l4GkAPN78CCqjLvWlljII9cH7i2~qMfor411Wz-pgwBxiBQN8UgdxFXcDeWy-BpcTyTYgWm1yvACOu6-utwlBcvr63D~JmGsVNxQEq6bszje9OD7OzL51Hyq0fFfTUe7i~nvqvfHoRIlJYkh2GAgURqFW~iexOzbbtGoQOSugE5L82RKt71Mfbbh0vIO-v~e1i7udjN~5j0ioSPGcPkhjXxw6pEiNw7cyEIsj0ETcD5aV-gJFDmilzJzjabWhAhM7pFP9INCNWF7gSptKEDWQDylIGiQ__",
    PCH: "https://media-hosting.imagekit.io//154bd012d7054c2e/pch.jpg?Expires=1832631021&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zQVk-LEt05R3iRs~lT4wrB9SJCEMlMPM0Usn7OCdSrPWqtM-xEL~uFh5BJTr-IYbnHOe4ghLewaJD-0jYLDB4Rt8z6MB~wuSJIKHRWBHQCd8nFwjQYXdK55Rch8zCbfOhvauTZ6b-WXIK9yZaFfT25Suf0-jWcOHQSVHDL0zkk2epzNCDuyneS8D6erbpivXC2ZD4JAI5cGnGh1xQO-5r3CiqhZRn3qLZruf9cbMIne5d29SgklxY1eB81qw~AVVZ8QdN3ehHCBGFn5TbjN33YT0vxqtocnOyRFdjQvjdLbYgsuTB-zQ5QOcGCwON0LfMCa~TX7PDRkIj6-8XKwLRQ__",
    DL: "https://media-hosting.imagekit.io//02475cc5406a4044/dlor.jpg?Expires=1832631021&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FefgDSqHLe9RVArPoOPpUhmjcqNgrFpqIlGpxRVA75XYNfGRMEXgzydOIMkLi~B1RrWShk0z2v6QAL6ppkr-JZJ2bQYGfY0ryIPyizRG~jc8FRvOmdbW5ffzdB1Hr3OgWbuOvOpJGilTuxQp6TYkvMTXIKKzc~h-VNjEgh370KBFjy8291fK~dKYpnFxf0tj0oPXgxV8JJlmZD2KxkhMI2Jbby4kNYl2Xc9c1Eom-cquwTRMGkucQVij-z6hOtUNSKDXWKOe1qowIKyuadYU~wQH4JDcIAPhC7YCC5eV3U4xNlC4h19lH~2KcvNvGLgmE5OKE0koib8CBWMraq4TJg__"
}

const songs = [
    {
        id: 1,
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        album: 'After Hours',
        cover: links.BL,
        recommendations: [
            { id: 2, title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', cover: links.LV },
            { id: 3, title: 'Peaches', artist: 'Justin Bieber', album: 'Justice', cover: links.PCH },
        ],
    },
    {
        id: 2,
        title: 'Levitating',
        artist: 'Dua Lipa',
        album: 'Future Nostalgia',
        cover: links.LV,
        recommendations: [
            { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', cover: links.BL },
            { id: 4, title: 'Drivers License', artist: 'Olivia Rodrigo', album: 'SOUR', cover: links.DL },
        ],
    },
    {
        id: 3,
        title: 'Peaches',
        artist: 'Justin Bieber',
        album: 'Justice',
        cover: links.PCH,
        recommendations: [
            { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', cover: links.BL },
            { id: 2, title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', cover: links.LV },
        ],
    },
    {
        id: 4,
        title: 'Drivers License',
        artist: 'Olivia Rodrigo',
        album: 'SOUR',
        cover: links.DL,
        recommendations: [
            { id: 2, title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', cover: links.LV },
            { id: 3, title: 'Peaches', artist: 'Justin Bieber', album: 'Justice', cover: links.PCH },
        ],
    },
];

const Recommendation = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSong, setSelectedSong] = useState(null);
    const [recommendations, setRecommendations] = useState([]);

    // Filter songs based on search query
    const filteredSongs = songs.filter(
        (song) =>
            song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
            song.album.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle play button click
    const handlePlay = (song) => {
        setSelectedSong(song);
        setRecommendations(song.recommendations);
    };

    return (
        <div className="min-h-screen bg-gradient-dark text-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Song Recommendations</h1>

                {/* Search Bar */}
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Search songs, artists, or albums..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 rounded-lg bg-white bg-opacity-10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Song Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSongs.map((song) => (
                        <div
                            key={song.id}
                            className={`card-hover card-glass rounded-lg p-6 shadow-lg hover:shadow-xl ${selectedSong?.id === song.id ? 'border-2 border-purple-500' : ''
                                }`}
                        >
                            <img
                                src={song.cover}
                                alt={song.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-semibold">{song.title}</h2>
                            <p className="text-gray-300">{song.artist}</p>
                            <p className="text-gray-400 text-sm">{song.album}</p>
                            <button
                                onClick={() => handlePlay(song)}
                                className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition duration-300"
                            >
                                Play Now
                            </button>
                        </div>
                    ))}
                </div>

                {/* Recommendations Section */}
                {selectedSong && (
                    <div className="mt-12">
                        <h2 className="text-3xl font-bold mb-6">Recommended Songs</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recommendations.map((song) => (
                                <div
                                    key={song.id}
                                    className="card-hover card-glass rounded-lg p-6 shadow-lg hover:shadow-xl"
                                >
                                    <img
                                        src={song.cover}
                                        alt={song.title}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    <h2 className="text-xl font-semibold">{song.title}</h2>
                                    <p className="text-gray-300">{song.artist}</p>
                                    <p className="text-gray-400 text-sm">{song.album}</p>
                                    <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition duration-300">
                                        Play Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Recommendation;