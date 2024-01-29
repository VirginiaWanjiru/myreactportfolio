import React from 'react';
import CodeIgnitor from '../images/codeigniter.svg';
import Flask from '../images/flask.svg';
import Django from '../images/django.svg';

function Frameworks() {
  return (
    <section id="frameworks">
      <h2>Frameworks</h2>
      <ul className="skills-list">
        <li><img src={CodeIgnitor} alt="CodeIgnitor" style={{ width: '100px', height: '100px' }} /></li>
        <li><img src={Flask} alt="Flask" style={{ width: '100px', height: '100px' }} /></li>
        <li><img src={Django} alt="Django" style={{ width: '100px', height: '100px' }} /></li>
       
      </ul>
    </section>
  );
}

export default Frameworks;
