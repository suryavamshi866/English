import React from 'react';
import './Vocabulary.css'; // Assuming you have a separate CSS file for vocabulary styles

const Vocabulary = () => {
    const vocabularyWord = {
        word: 'Cat',
        type: 'Noun',
        sentence: 'The cat sat on the mat.',
        imageUrl: 'https://farm9.static.flickr.com/8374/29865801581_52dc75c9f4.jpg', // Replace with an actual image URL
    };

    return (
        <div className="vocabulary-container">
            <h2>Vocabulary Word</h2>
            <img src={vocabularyWord.imageUrl} alt={vocabularyWord.word} className="vocabulary-image" />
            <h3>{vocabularyWord.word}</h3>
            <p><strong>Type:</strong> {vocabularyWord.type}</p>
            <p><strong>Sentence:</strong> {vocabularyWord.sentence}</p>
        </div>
    );
};

export default Vocabulary;
