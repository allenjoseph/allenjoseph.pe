import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import FeedList from '../Feeds/FeedList';
import Avatar from './Avatar';
import Profile from './Profile';

export default class Header extends React.Component {
  render() {
    return (
      <header className="row flex-column flex-md-row align-items-start">
        <div className="profile-avatar col-12 col-md-3 text-center text-md-right">
          <Avatar />
        </div>
        <div className="profile-description col-12 col-md-5">
          <Profile info={this.props.info} />
        </div>
        <div className="profile-feeds col-12 col-md-4">
          <FeedList />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  info: PropTypes.object
};
