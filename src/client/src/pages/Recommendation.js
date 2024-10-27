import React, { useState } from 'react';
import axios from 'axios';

const Recommendation = () => {
    const [genres, setGenres] = useState([]);
    const [recommendations, setRecommendations] = useState([]);

    const handleRecommendation = async () => {
        const response = await axios.get('http://localhost:5000/api/books/recommendations', {
            params: { genres }
        });
        setRecommendations(response.data);
    };

    return (
        <div>
            <h2>Book Recommendations</h2>
            <input type="text" onChange={(e) => setGenres(e.target.value.split(','))} placeholder="Enter genres (comma separated)" />
            <button onClick={handleRecommendation}>Get Recommendations</button>
            <ul>
                {recommendations.map(book => <li key={book.id}>{book.title} by {book.author}</li>)}
            </ul>
        </div>
    );
};

export default Recommendation;
