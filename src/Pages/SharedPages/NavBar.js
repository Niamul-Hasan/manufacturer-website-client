import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { AiOutlineUser } from 'react-icons/ai';

const NavBar = () => {

    const [user] = useAuthState(auth);
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/portfolio'>About</Link></li>
        {user && <li><Link to='/dash'>DashBoard</Link></li>}

        {user
            ? <li><button onClick={() => {
                signOut(auth);
                localStorage.removeItem('accessToken')
            }}>LogOut</button></li>
            : <li><Link to='/login'>Login</Link></li>}
        {
            user && <li><Link to=""><AiOutlineUser />{user.email}</Link></li>
        }


    </>

    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-2xl" to='/'><span
                    className='text-primary font-bold'>P</span><span className='text-secondary font-bold'>C</span> <span className='ml-2'> HUNK</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <label for="dashBoard" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>

        </div>
    );
};

export default NavBar;