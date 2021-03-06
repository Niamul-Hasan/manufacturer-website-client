import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/UseAdmin';
import NavBar from '../SharedPages/NavBar';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <NavBar></NavBar>
            <div class="drawer drawer-mobile">
                <input id="dashBoard" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* <!-- Page content here --> */}
                    <span className='text-blue-700 font-bold text-2xl'>WelCome To Your <span className='text-purple-500 font-bold text-4xl'>D</span>ashBoard</span>
                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="dashBoard" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dash'>My Profile</Link></li>

                        {!admin && <div>
                            <li><Link to='myorder'>MyOrder </Link></li>
                            <li><Link to='review'>Add Reviews</Link></li>
                        </div>}

                        {admin && <div>
                            <li><Link to='manage'>Manage Orders</Link></li>
                            <li><Link to='user'>Make Admin</Link></li>
                            <li><Link to='manageProduct'>Manage Products</Link></li>
                            <li><Link to='addProduct'>Add Product</Link></li>
                        </div>}

                    </ul>

                </div>
            </div>


        </div>
    );
};

export default DashBoard;