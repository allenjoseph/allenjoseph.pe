import React from 'react';
import PropTypes from 'prop-types';

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.slogan}</h3>
        <p>{this.props.info.description}</p>
        <p>
          <i className="fa fa-map-marker" />
          <span className="msl">{this.props.info.direction}</span>
        </p>
      </div>
    );
  }
}

Profile.propTypes = {
  info: PropTypes.shape({
    slogan: PropTypes.string,
    description: PropTypes.string,
    direction: PropTypes.string
  })
};
