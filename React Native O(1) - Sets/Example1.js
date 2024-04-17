import React, { useState } from 'react';

function LikeFeature() {
    // Initialize a Set to store liked post IDs
    const [likedPosts, setLikedPosts] = useState(new Set());

    // Function to toggle the like status of a post
    const toggleLike = (postId) => {
        setLikedPosts(prevLikedPosts => {
            const newLikedPosts = new Set(prevLikedPosts);
            if (newLikedPosts.has(postId)) {
                newLikedPosts.delete(postId);
            } else {
                newLikedPosts.add(postId);
            }
            return newLikedPosts;
        });
    };

    // Function to check if a post is liked 
    const isLiked = (postId) => {
        return likedPosts.has(postId);
    };

    return (
        <div>
            {/* Example: Posts with like buttons */}
            <div className="post">
                {/* ... Example post content ... */}
                <button onClick={() => toggleLike(123)}>
                    {isLiked(123) ? 'Unlike' : 'Like'} 
                </button> 
            </div>
            {/* You can add more posts with similar structure */}
        </div>
    );
}

export default LikeFeature;
