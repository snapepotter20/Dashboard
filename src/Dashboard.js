import React from 'react';
import './Dashboard.css';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <LeftBar/>
      <RightBar/>
    </div>
  )
}

export default Dashboard;
