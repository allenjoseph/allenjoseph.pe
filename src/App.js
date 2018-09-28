import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import FeedGrid from './Feeds/FeedGrid';
import SkillGrid from './Skills/SkillGrid';
import VideoGrid from './Videos/VideoGrid';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      skills: {},
      videos: {}
    };
  }

  componentDidMount() {
    fetch('/__/firebase/init.json')
      .then(response => response.json())
      .then(config => {
        firebase.initializeApp(config);
        firebase
          .database()
          .ref('/data')
          .once('value')
          .then(snapshot => {
            const data = snapshot.val() || {};
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
          });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header info={this.state.info} />
        <section className="body-content">
          <FeedGrid />
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
