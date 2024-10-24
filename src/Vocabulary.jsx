import React, { useState } from 'react';
import './Vocabulary.css'; 

const Vocabulary = () => {
    const [inputWord, setInputWord] = useState('');
    const [vocabularyWord, setVocabularyWord] = useState(null);

    const handleSearch = () => {
        // Example vocabulary words
        const words = {
            cat: {
                type: 'Noun',
                sentence: 'The cat sat on the mat.',
                imageUrl: 'https://farm9.static.flickr.com/8374/29865801581_52dc75c9f4.jpg',
            },
            dog: {
                type: 'Noun',
                sentence: 'The dog barked at the mailman.',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7zpG7Q2QGK9YGchMgfbXycRtDimjSCjk8w&s',
            },
            // Add more words here
        };

        const wordData = words[inputWord.toLowerCase()];
        setVocabularyWord(wordData);
    };

    return (
        <div className="vocabulary-container">
            <h2>Vocabulary Search</h2>
            <input
                type="text"
                value={inputWord}
                onChange={(e) => setInputWord(e.target.value)}
                placeholder="Enter a word (e.g., cat)"
                className="vocabulary-input"
            />
            <button onClick={handleSearch}>Search</button>

            {vocabularyWord && (
                <div className="vocabulary-result">
                    <img src={vocabularyWord.imageUrl} alt={inputWord} className="vocabulary-image" />
                    <h3>{inputWord.charAt(0).toUpperCase() + inputWord.slice(1)}</h3>
                    <p><strong>Type:</strong> {vocabularyWord.type}</p>
                    <p><strong>Sentence:</strong> {vocabularyWord.sentence}</p>
                </div>
            )}
        </div>
    );
};

export default Vocabulary;
