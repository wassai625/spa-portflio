import React from 'react';
import Sidebar from '../pages/sidebar/Sidebar';
import Timeline from '../pages/timeline/Timeline';
import Widgets from '../pages/widget/Widgets';
import './Home.css';

function Home() {
  return (
    <div className='home'>

        <Sidebar />

        <Timeline />

        <Widgets />
      
    </div>
  )
}

export default Home;
