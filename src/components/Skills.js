// Skills.js
import React from 'react';
import Python from '../images/python.svg';
import R from '../images/R.svg';
import CPlusPlus from '../images/CPlusPlus.svg';
import Csharp from '../images/csharp.svg';
import Java from '../images/java.svg';
import JS from '../images/JS.svg';
import Kotlin from '../images/kotlin.svg';
import Visual from '../images/visual-studio-code.svg';

function Skills() {
  return (
    <section id="skills">
      <h2>Programming Languages and IDES </h2>
      <ul className="creative-skills-list">
        
      <li><img src={Python} alt="Python Logo" style={{ width: '100px', height: '100px' }} /></li>
      <li><img src={R} alt="R Logo" style={{ width: '100px', height: '100px' }} /></li>
      <li><img src={Csharp} alt="C Logo" style={{ width: '100px', height: '100px' }} /></li>
      <li><img src={CPlusPlus} alt="C# Logo" style={{ width: '100px', height: '100px' }} /></li>
      <li><img src={Java} alt="Java Logo" style={{ width: '100px', height: '100px' }} /></li>
      <li><img src={JS} alt="JavaScript Logo" style={{ width: '100px', height: '100px' }} /></li>
      <li><img src={Kotlin} alt="Kotlin Logo" style={{ width: '100px', height: '75px' }} /></li>
      <li><img src={Visual} alt="VS Logo" style={{ width: '100px', height: '100px' }} /></li>
      
        
      </ul>
    </section>
  );
}

export default Skills;
