import React from 'react'

function Loader() {
    return (
        <div className="space-y-6">
            {/* Skeleton for Currently Playing */}
            <div className="animate-pulse">
                <div className="h-48 bg-gray-700 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-1/3"></div>
            </div>

            {/* Skeleton for Recommended Songs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="animate-pulse">
                        <div className="h-48 bg-gray-700 rounded-lg mb-4"></div>
                        <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
                        <div className="h-4 bg-gray-700 rounded w-1/3"></div>
                        <div className="h-10 bg-gray-700 rounded-lg mt-4"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Loader