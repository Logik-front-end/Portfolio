import React from 'react';
import './skills.css';

function Skills() {
  const emojis = ['🖥️', '🖥️', '❤️', '😁', '🇺🇦'];

  const handleSkillClick = (e) => {
    const parentSkill = e.currentTarget;

    for (let i = 0; i < 20; i++) { 
      const emoji = document.createElement('div');
      emoji.className = 'emoji';
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.setProperty('--direction-x', Math.random() * 2 - 1);
      emoji.style.setProperty('--direction-y', Math.random() * 2 - 1);
      parentSkill.appendChild(emoji);
      
      setTimeout(() => {
        emoji.remove();
      }, 3000); 
    }
  };

  return (
    <div className='skills'>
      <h1>My Skills</h1>
      <section>
        <div className="parent-skill" onClick={handleSkillClick}>
          <div className="skill">
            <div className="progress" data-progress="80">
              <span className="progress-number">100%</span>
            </div>
          </div>
          <span className="title">HTML/CSS</span>
        </div>

        <div className="parent-skill" onClick={handleSkillClick}>
          <div className="skill">
            <div className="progress" data-progress="65">
              <span className="progress-number">70%</span>
            </div>
          </div>
          <span className="title">JavaScript</span>
        </div>

        <div className="parent-skill" onClick={handleSkillClick}>
          <div className="skill">
            <div className="progress" data-progress="50">
              <span className="progress-number">40%</span>
            </div>
          </div>
          <span className="title">React</span>
        </div>
      </section>
    </div>
  );
}

export default Skills;
