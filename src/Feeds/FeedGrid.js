import React from 'react';
import FeedCard from './FeedCard';
import PropTypes from 'prop-types';

export default class FeedGrid extends React.Component {
  constructor(props) {
    super(props);
    this.loading = React.createRef();
    this.dataFetched = false;
    this.state = {
      start: 0,
      feeds: []
    };
  }

  startInterval() {
    this.nextThree();

    const tenSeconds = 10000;
    this.sliderID = setInterval(() => this.nextThree(), tenSeconds);
  }

  componentWillUnmount() {
    clearInterval(this.sliderID);
  }

  nextThree() {
    this.loading.current.classList.remove('animate');
    this.loading.current.classList.add('animate');

    this.setState(state => {
      const end = state.start + 3;
      const start = end > this.props.feeds.length ? 0 : end;
      return {
        start,
        feeds: this.props.feeds.slice(state.start, end)
      };
    });
  }

  render() {
    if (!this.dataFetched && this.props.feeds && this.props.feeds.length) {
      this.dataFetched = true;
      this.startInterval();
    }
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

FeedGrid.propTypes = {
  feeds: PropTypes.array
};
