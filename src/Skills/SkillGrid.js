import React from 'react';
import PropTypes from 'prop-types';
import './Skills.css';

export default class SkillGrid extends React.Component {
  render() {
    return (
      <div id="skill-grid" className="card-columns">
        {this.props.skills.items &&
          this.props.skills.items.map(item => {
            const cardStyle = {
              color: item.textColor,
              backgroundColor: item.background
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

SkillGrid.propTypes = {
  skills: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        background: PropTypes.string,
        textColor: PropTypes.string
      })
    )
  })
};
