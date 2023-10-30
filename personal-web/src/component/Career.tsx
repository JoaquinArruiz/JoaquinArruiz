import React, { useState } from 'react';
import '../styles/career.scss';

const career =[
  {
    year: 2022,
    month: "June",
    title: 'Freelancer Designer',
    description: 'I worked as designer, doing logos, banners, and other stuff. Using Adobe Premiere, Adobe Illustrator and Photoshop.'
  },
  {
    year: 2023,
    month: "Sep",
    title: 'Odoo Developer',
    description: 'I am currently working as an Odoo Developer at Elepe Servicios. Using Python, XML, PostgreSQL, Docker, among others.'
  },
  {
    year: 2023,
    month: "Sep",
    title: 'Odoo Developer',
    description: 'I am currently working as an Odoo Developer at Elepe Servicios. Using Python, XML, PostgreSQL, Docker, among others.'
  },
]

const Career = () => {
  const [selectedCircle, setSelectedCircle] = useState<number | null>(career.length - 1);

  const handleCircleClick = (index: number) => {
    setSelectedCircle(index);
  }

  return (
    <div className="career section">
      <h3>My Career Timeline</h3>
      <div className="career-display">
        <div className="timeline">
          {career.map((item, index) => {
            return (
              <div className='timeline-items'>
                  <div className="circle-container" key={index}>
                    <div className={`circle ${selectedCircle === index ? 'selected' : ''}`} onClick={() => handleCircleClick(index)}></div>
                    <div className="line"></div>
                    <div className="year">{item.year}</div>
                    <div className="month">{item.month}</div>
                  </div>
                  <hr></hr>
              </div>
            )
          }
          )}
          <div className='timeline-items'> Present </div>
        </div>
        {selectedCircle !== null && (
          <div className="selected-item">
            <h4>{career[selectedCircle].title}</h4>
            <p>{career[selectedCircle].description}</p>
          </div>
        )}
        </div>
    </div>
  );
};

export default Career;