import React from 'react';
import FeedCard from './FeedCard';
import PropTypes from 'prop-types';

export default class FeedGrid extends React.Component {
  constructor(props) {
    super(props);
    this.animationStarted = false;
    this.loading = React.createRef();
    this.state = {
      start: 0,
      feeds: []
    };
  }

  componentWillUnmount() {
    clearInterval(this.sliderID);
  }

  startAnimation() {
    if (!this.props.feeds || !this.props.feeds.length) {
      return;
    }

    this.animationStarted = true;
    this.showNextFeeds();

    const delay = 10000;
    this.sliderID = setInterval(() => this.showNextFeeds(), delay);
  }

  showNextFeeds() {
    this.loading.current.classList.remove('animate');
    this.loading.current.classList.add('animate');

    this.setState(this.getNextState.bind(this));
  }

  getNextState(state) {
    const end = state.start + 3;
    const start = end > this.props.feeds.length ? 0 : end;
    const feeds = this.props.feeds.slice(state.start, end);
    return { start, feeds };
  }

  render() {
    if (!this.animationStarted) {
      this.startAnimation();
    }

    return (
      <div id="feed-grid" className="card-deck">
        {this.state.feeds.map((feed, i) => (
          <FeedCard key={`feedcard-${i}`} data={feed} />
        ))}
        <div className="loading" ref={this.loading} />
      </div>
    );
  }
}

FeedGrid.propTypes = {
  feeds: PropTypes.array
};
