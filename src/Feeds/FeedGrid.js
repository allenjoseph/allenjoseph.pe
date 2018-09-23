import React from 'react';
import feeds from '../data/feeds.json';
import FeedCard from './FeedCard';

export default class FeedGrid extends React.Component {
  constructor(props) {
    super(props);
    this.loading = React.createRef();
    this.state = {
      start: 0,
      feeds: feeds.items.slice(0, 3),
    };
  }

  componentDidMount() {
    const tenSeconds = 10000;
    this.sliderID = setInterval(() => {
      this.loading.current.classList.remove('animate');
      this.loading.current.classList.add('animate');
      this.nextThree();
    }, tenSeconds);
  }

  componentWillUnmount() {
    clearInterval(this.sliderID);
  }

  nextThree() {
    this.setState(state => {
      const end = state.start + 3;
      const start = end > feeds.items.length ? 0 : end;
      return {
        start,
        feeds: feeds.items.slice(state.start, end),
      };
    });
  }
  render() {
    return (
      <div id="feed-grid" className="card-deck">
        {this.state.feeds.map(feed => (
          <FeedCard key={feed.guid} data={feed} />
        ))}
        <div className="loading" ref={this.loading} />
      </div>
    );
  }
}
