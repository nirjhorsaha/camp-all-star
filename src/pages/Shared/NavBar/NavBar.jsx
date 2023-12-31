import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import navLogo from '../../../assets/navLogo-png-removebg-preview.png'
import avatarImg from '../../../assets/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProviders';
import { Switch, useDarkreader } from "react-darkreader";

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isDark, { toggle }] = useDarkreader(false);
    
    // user logout
    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li className='md:text-lg'>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? 'text-red-500 underline font-extrabold ' : 'default')}>
                Home
            </NavLink>
        </li>
        <li className='md:text-lg'>
            <NavLink to="/instractors"
                className={({ isActive }) => (isActive ? 'text-red-500 underline font-extrabold' : 'default')}>
                Instructors
            </NavLink>
        </li>
        {
            // user &&
            <li className='md:text-lg'>
                <NavLink to="/classes"
                    className={({ isActive }) => (isActive ? 'text-red-500 underline font-extrabold' : 'default')}>
                    Classes
                </NavLink>
            </li>
        }
        {
            user &&
            <li className='md:text-lg'>
                <NavLink to="/dashboard"
                    className={({ isActive }) => (isActive ? 'text-red-500 underline font-extrabold' : 'default')}>
                    Dashboard
                </NavLink>
            </li>
        }
    </>
    return (
        <div className='App'>
            {/* <Icon /> */}
            <div className="navbar bg-white-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white-100 rounded-box w-52 ">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/" className='normal-case text-5xl custom-text font-bold'>
                        <img src={navLogo} className='w-28' alt="" srcset="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 tracking-wider font-medium">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="custom-btn">Start Applying</a> */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            {
                                // user ?
                                <div id="app-title" className="w-10 rounded-full">
                                    <img src={user && user.photoURL ? user.photoURL : avatarImg} />
                                </div>

                            }
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-white-100 font-bold rounded-box w-52">
                            <Link to="/profile">
                                <a className="justify-between">
                                    Profile
                                </a>
                            </Link>
                            {/* <li><a>Dashboard</a></li> */}
                        </ul>
                    </div>
                    {
                        user ?
                            <div>
                                <button onClick={handleLogout} className="btn btn-warning btn-outline ms-4">Logout</button>
                            </div>

                            : <Link to='/login'>
                                <button className="btn btn-warning btn-outline ms-4">login</button>
                            </Link>
                    }
                    <li className="App-switch-item">
                        <Switch checked={isDark} onChange={toggle} styling="github" />
                        {/* <p>Github</p> */}
                    </li>
                </div>
            </div>
        </div>
    );
};

export default NavBar;