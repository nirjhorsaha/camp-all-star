import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Dashboard - Camp All Star</title>
            </Helmet>

            <div className='relative min-h-screen md:flex'>
                <Sidebar />
                <div className='flex-1  md:ml-64'>
                    <div className='p-0'>
                        {/* <h1 className='text-center text-4xl font-bold text-orange-500  justify-center items-center'>Welcome To Dashboard</h1> */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;