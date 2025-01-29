// components/Recommendation.js
import React, { useState } from 'react';
import { placeholderImageLink } from '../Const/links';
import Loader from './Loader';
import NoResults from './NoResults';
import { DEV_SERVER } from '../Const/api';

const Recommendation = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(null);

    const handleSearch = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${DEV_SERVER}/api/recommendations?song=${encodeURIComponent(searchQuery)}`);
            const data = await res.json();

            if (data.error) {
                setSearchResults([]);
                console.log(data.error);
                return;
            }
            setSearchResults(data); // Set the API response data
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-dark text-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Song Recommendations</h1>

                {/* Search Bar */}
                <div className="mb-8 flex gap-4">
                    <input
                        type="text"
                        placeholder="Search songs, artists, or albums..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 rounded-lg bg-white bg-opacity-10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg transition duration-300"
                    >
                        Search
                    </button>
                </div>

                {/* Display Search Results */}
                {loading ? <Loader /> : searchResults ? (
                    <>
                        {/*No results */}

                        {!searchResults?.recommendations ? (<NoResults searchQuery={searchQuery} />) :
                            (<>

                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold mb-6">Currently Playing</h2>
                                    <div className="card-hover card-glass rounded-lg p-6 shadow-lg hover:shadow-xl">
                                        <div className="relative">
                                            <img
                                                src={placeholderImageLink}
                                                alt={searchResults.currently_playing.track_name}
                                                className="w-full h-48 object-cover rounded-lg mb-4 filter blur-sm"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
                                        </div>
                                        <h2 className="text-xl font-semibold">{searchResults.currently_playing.track_name}</h2>
                                        <p className="text-gray-300">{searchResults.currently_playing.artist}</p>
                                        <p className="text-gray-400 text-sm">{searchResults.currently_playing.album_name}</p>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <h2 className="text-3xl font-bold mb-6">Recommended Songs</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {searchResults.recommendations.map((song, index) => (
                                            <div
                                                key={index}
                                                className="card-hover card-glass rounded-lg p-6 shadow-lg hover:shadow-xl"
                                            >
                                                <div className="relative">
                                                    <img
                                                        src={placeholderImageLink}
                                                        alt={song.track_name}
                                                        className="w-full h-48 object-cover rounded-lg mb-4 filter blur-sm"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
                                                </div>
                                                <h2 className="text-xl font-semibold">{song.track_name}</h2>
                                                <p className="text-gray-300">{song.artist}</p>
                                                <p className="text-gray-400 text-sm">{song.album_name}</p>
                                                <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition duration-300">
                                                    Play Now
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                            )
                        }

                    </>
                ) : (
                    <p className="text-center">Search for a song to see recommendations.</p>
                )}
            </div>
        </div>
    );
};

export default Recommendation;