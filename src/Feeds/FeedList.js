import React from 'react';
import Feed from './Feed';
import feeds from '../data/feeds.json';
import './Feeds.css';

export default class FeedList extends React.Component {
  render() {
    return (
      <ul className="feeds-titles-box">
        {feeds.items.map(feed => (
          <Feed key={feed.guid} data={feed} />
        ))}
      </ul>
    );
  }
}
