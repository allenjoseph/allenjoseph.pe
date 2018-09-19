import React from 'react';
import data from '../data/app.json';
import './Skills.css';

export default class SkillGrid extends React.Component {
  render() {
    return (
      <div id="skill-grid" className="card-columns">
        {data.sections.skills.items.map(item => {
          const cardStyle = {
            color: item.textColor,
            backgroundColor: item.background,
          };
          return (
            <div key={item.name} className="card p-3" style={cardStyle}>
              <h3 className="mb-0 text-center">{item.name}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}
