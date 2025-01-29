import React from 'react'

function NoResults({ searchQuery }) {
    return (
        <div className="text-center">
            <span role="img" aria-label="Sad face" className="text-4xl">😞</span>
            <p className="text-gray-400 mt-2">No results found for "{searchQuery}". Try a different search.</p>
        </div>
    )
}

export default NoResults