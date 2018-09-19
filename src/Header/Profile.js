import React from 'react';
import data from '../data/app.json';

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <h3>{data.slogan}</h3>
        <p>{data.description}</p>
        <p>
          <i className="fa fa-map-marker" />
          <span className="msl">{data.direction}</span>
        </p>
      </div>
    );
  }
}
