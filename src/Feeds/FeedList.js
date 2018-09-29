import React from 'react';
import Feed from './Feed';
import './Feeds.css';
import PropTypes from 'prop-types';

export default class FeedList extends React.Component {
  render() {
    const feeds = this.props.feeds || [];
    return (
      <ul className="feeds-titles-box">
        {feeds.map(feed => (
          <Feed key={feed.guid} data={feed} />
        ))}
      </ul>
    );
  }
}

FeedList.propTypes = {
  feeds: PropTypes.array
};
