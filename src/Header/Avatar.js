import React from 'react';

export default class Avatar extends React.Component {
  render() {
    return (
      <img
        className="img-circle"
        src={process.env.PUBLIC_URL + '/img/profile.jpg'}
        alt="Profile"
      />
    );
  }
}
