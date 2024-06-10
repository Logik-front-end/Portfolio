import React, { useState } from 'react';
import './about.css';

const About = () => {
    const initialWords = [
        { text: "I", x: 1, y: 0 },
        { text: "am", x: 40, y: 0 },
        { text: "a", x: 100, y: 0 },
        { text: "web", x: 140, y: 0 },
        { text: "developer", x: 200, y: 0 },
        { text: "with", x: 340, y: 0 },
        { text: "3", x: 400, y: 0 },
        { text: "years", x: 440, y: 0 },
        { text: "of", x: 520, y: 0 },
        { text: "experience.", x: 560, y: 0 },
        { text: "I", x: 0, y: 40 },
        { text: "specialize", x: 40, y: 40 },
        { text: "in", x: 160, y: 40 },
        { text: "creative", x: 200, y: 40 },
        { text: "interactive", x: 300, y: 40 },
        { text: "and", x: 440, y: 40 },
        { text: "responsive", x: 480, y: 40 },
        { text: "web", x: 600, y: 40 },
        { text: "applications,", x: 640, y: 40 },
        { text: "using", x: 0, y: 80 },
        { text: "advanced", x: 60, y: 80 },
        { text: "technologies", x: 160, y: 80 },
        { text: "and", x: 300, y: 80 },
        { text: "approaches.", x: 340, y: 80 },
        { text: "My", x: 460, y: 80 },
        { text: "passion", x: 500, y: 80 },
        { text: "for", x: 580, y: 80 },
        { text: "programming", x: 620, y: 80 },
        { text: "began", x: 0, y: 120 },
        { text: "I", x: 60, y: 120 },
        { text: "started", x: 80, y: 120 },
        { text: "learning", x: 160, y: 120 },
        { text: "the", x: 260, y: 120 },
        { text: "front-end", x: 300, y: 120 },
        { text: "since", x: 400, y: 120 },
        { text: "the", x: 460, y: 120 },
        { text: "time", x: 500, y: 120 },
        { text: "of", x: 560, y: 120 },
        { text: "the", x: 600, y: 120 },
        { text: "Crusades,", x: 640, y: 120 },
        { text: "this", x: 0, y: 160 },
        { text: "is", x: 40, y: 160 },
        { text: "Friedrich", x: 60, y: 160 },
        { text: "2's", x: 160, y: 160 },
        { text: "advice", x: 200, y: 160 },
        { text: "to", x: 280, y: 160 },
        { text: "me,", x: 300, y: 160 },
        { text: "and", x: 340, y: 160 },
        { text: "I", x: 380, y: 160 },
        { text: "decided", x: 400, y: 160 },
        { text: "to", x: 480, y: 160 },
        { text: "learn", x: 500, y: 160 },
        { text: "the", x: 560, y: 160 },
        { text: "front-end,", x: 600, y: 160 },
        { text: "and", x: 0, y: 200 },
        { text: "since", x: 40, y: 200 },
        { text: "then", x: 100, y: 200 },
        { text: "I", x: 160, y: 200 },
        { text: "have", x: 180, y: 200 },
        { text: "been", x: 240, y: 200 },
        { text: "steadily", x: 300, y: 200 },
        { text: "developing", x: 380, y: 200 },
        { text: "in", x: 480, y: 200 },
        { text: "this", x: 520, y: 200 },
        { text: "area.", x: 580, y: 200 },
    ];

    const [words, setWords] = useState(initialWords);

    const handleDragStart = (e, index) => {
        const word = words[index];
        e.dataTransfer.setData('index', index);
        e.dataTransfer.setDragImage(new Image(), 0, 0); // Hide the default drag image
        e.dataTransfer.setData('offsetX', e.clientX - word.x);
        e.dataTransfer.setData('offsetY', e.clientY - word.y);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const index = e.dataTransfer.getData('index');
        const offsetX = parseInt(e.dataTransfer.getData('offsetX'), 10);
        const offsetY = parseInt(e.dataTransfer.getData('offsetY'), 10);

        const updatedWords = [...words];
        updatedWords[index].x = e.clientX - offsetX;
        updatedWords[index].y = e.clientY - offsetY;

        setWords(updatedWords);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className="about">
            <h1>About Me</h1>
            <div className="text" onDrop={handleDrop} onDragOver={handleDragOver}>
                {words.map((word, index) => (
                    <span
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        className="draggable-word"
                        style={{ left: word.x, top: word.y }}
                    >
                        {word.text}{' '}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default About;
