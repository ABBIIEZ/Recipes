import React, { useState, useEffect } from 'react';

interface LikeProps {
    id: string;
    image: string;
    title: string;
    onToggleLike: (id: string, liked: boolean) => void; // Callback function to handle like/unlike action
    initialLiked: boolean; // Initial liked state
}

const Like: React.FC<LikeProps> = ({ id, onToggleLike, initialLiked }) => {
    const [liked, setLiked] = useState<boolean>(initialLiked);

    useEffect(() => {
        setLiked(initialLiked);
    }, [initialLiked]);

    const toggleLike = () => {
        const newLiked = !liked;
        setLiked(newLiked);
        onToggleLike(id, newLiked);
    };

    return (
        <button onClick={toggleLike} className="like-button mt-8">
            {liked ? "❤️ Unlike" : "🤍 Like"}
        </button>
    );
};

export default Like;


