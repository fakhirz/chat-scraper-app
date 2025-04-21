import React from 'react'
import DashboardContent from '../components/DashboardContent';

const Dashboard = ({ pathname }) => {
  return (
    <DashboardContent pathname={pathname}/>
  );
}

export default Dashboard;