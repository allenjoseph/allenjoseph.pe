import React from 'react';
import PropTypes from 'prop-types';
import FeedPropTypes from './FeedPropTypes';

export default class Feed extends React.Component {
  render() {
    return (
      <li>
        <a
          href={this.props.data.link}
          target="_blank"
          rel="noopener noreferrer">
          {this.props.data.title}
        </a>
      </li>
    );
  }
}

Feed.propTypes = {
  data: PropTypes.shape(FeedPropTypes),
};
