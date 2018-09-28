import React from 'react';
import PropTypes from 'prop-types';
import './Videos.css';

export default class VideoGrid extends React.Component {
  render() {
    return (
      <div id="skill-grid" className="card-columns">
        {this.props.videos.items &&
          this.props.videos.items.map(item => {
            return (
              <div key={item.id} className="card">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img
                    className="card-img-top"
                    src={item.img}
                    alt={item.title}
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title text-center">{item.title}</h4>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

VideoGrid.propTypes = {
  videos: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        img: PropTypes.string,
        url: PropTypes.string
      })
    )
  })
};
