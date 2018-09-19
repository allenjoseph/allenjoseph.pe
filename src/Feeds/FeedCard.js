import React from 'react';
import PropTypes from 'prop-types';
import FeedPropTypes from './FeedPropTypes';
import * as moment from 'moment';

export default class FeedCard extends React.Component {
  render() {
    return (
      <div className="card">
        <a
          href={this.props.data.link}
          target="_blank"
          rel="noopener noreferrer">
          <img
            className="card-img-top"
            src={this.props.data.thumbnail}
            alt={this.props.data.title}
          />
        </a>
        <div className="card-body">
          <p className="card-text">
            {this.props.data.title}
            <br />
            <a
              href={this.props.data.link}
              target="_blank"
              rel="noopener noreferrer">
              Leer más...
            </a>
          </p>
          <p className="card-text">
            <small className="text-muted">
              {moment(this.props.data.pubDate)
                .startOf('hour')
                .fromNow()}
            </small>
          </p>
        </div>
      </div>
    );
  }
}

FeedCard.propTypes = {
  data: PropTypes.shape(FeedPropTypes),
};
