import React from 'react';
import feeds from '../data/feeds.json';
import FeedCard from './FeedCard';

export default class FeedGrid extends React.Component {
  render() {
    return (
      <div id="feed-grid" className="card-deck">
        {feeds.items.map(feed => (
          <FeedCard key={feed.guid} data={feed} />
        ))}
      </div>
    );
  }
}
