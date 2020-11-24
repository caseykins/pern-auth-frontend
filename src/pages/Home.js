import React from 'react';
import '../components/LandingPage/App.scss';
import Carousel from '../components/LandingPage/Carousel'
import Mission from '../components/LandingPage/Mission'
import Problem from '../components/LandingPage/Problem'
import Help from '../components/LandingPage/Help'
import Newsletter from '../components/LandingPage/Newsletter'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className="Components">
      {/* components here */}
      <Carousel />
      <Mission />
      <Problem />
      <Help />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
