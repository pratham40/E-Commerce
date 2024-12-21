import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'
import authService from '../appwrite/auth'
import { logout } from '../Redux/Slices/AuthSlices'
import toast from 'react-hot-toast'

function HomeLayout() {
  const status = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch();

  async function handleLogout() {
    try {
      const sessionId = await authService.account.getSession('current');
      const res = await authService.logout({ sessionId: sessionId.$id });
      console.log(res);
      if (res.success) {
        dispatch(logout());
        toast.success('Logged out successfully');
      }
    } catch (error) {
      toast.error('Failed to logout');
    }
  }

  useEffect(() => {
    console.log(status);
  }, [status])

  return (
    <div className="w-full h-full bg-gray-800">
      <div className="w-full">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              Ecommerce
            </Link>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            {
              status ? (
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                      <Link className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li><Link>Settings</Link></li>
                    <li>
                      <Link onClick={handleLogout}>Logout</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/login" className="btn btn-outline btn-error">Login/Signup</Link>
              )
            }
          </div>
        </div>
      </div>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default HomeLayout;
