import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FeedGrid from '../Feeds/FeedGrid';
import SkillGrid from '../Skills/SkillGrid';
import VideoGrid from '../Videos/VideoGrid';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      skills: {},
      videos: {},
      feeds: []
    };
  }

  componentDidMount() {
    const appDataUrl = '/__/firebase/init.json';
    fetch(appDataUrl)
      .then(response => response.json())
      .then(config => this.getAppData(config))
      .then(snapshot => this.setAppData(snapshot.val() || {}));

    const feedsDataUrl =
      'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fes.gizmodo.com%2Frss';
    fetch(feedsDataUrl)
      .then(response => response.json())
      .then(data => this.setFeedsData(data));
  }

  getAppData(config) {
    firebase.initializeApp(config);
    return firebase
      .database()
      .ref('/data')
      .once('value');
  }

  setAppData(data) {
    if (!data) {
      return;
    }
    this.setState({
      info: {
        title: data.title,
        description: data.description,
        slogan: data.slogan,
        direction: data.direction,
        copyright: data.copyright
      },
      skills: data.sections.skills,
      videos: data.sections.articles
    });
  }

  setFeedsData(data) {
    if (!data || !data.items) {
      return;
    }
    this.setState({
      feeds: data.items
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header info={this.state.info} feeds={this.state.feeds} />
        <section className="body-content">
          <FeedGrid feeds={this.state.feeds} />
          <SkillGrid skills={this.state.skills} />
          <hr />
          <VideoGrid videos={this.state.videos} />
          <hr />
        </section>
        <Footer copyright={this.state.info.copyright} />
      </div>
    );
  }
}

export default App;
