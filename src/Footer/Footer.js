import React from 'react';
import data from '../data/app.json';
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h6 className="text-center">{data.copyright}</h6>
      </footer>
    );
  }
}
