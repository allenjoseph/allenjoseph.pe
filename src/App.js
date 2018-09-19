import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './App.css';
import FeedGrid from './Feeds/FeedGrid';
import SkillGrid from './Skills/SkillGrid';
import VideoGrid from './Videos/VideoGrid';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <section className="body-content">
          <FeedGrid />
          <hr />
          <SkillGrid />
          <hr />
          <VideoGrid />
          <hr />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
