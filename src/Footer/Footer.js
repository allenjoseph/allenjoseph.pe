import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h6 className="text-center">{this.props.copyright}</h6>
      </footer>
    );
  }
}

Footer.propTypes = {
  copyright: PropTypes.string,
};
