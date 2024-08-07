import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FaUser } from 'react-icons/fa';

const Naver = () => {
  const navlinks = (
    <>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-700 font-semibold  px-3 py-2 rounded-md'
            : 'font-semibold px-3 py-2  '
        }
      >
        Home
      </NavLink>
      <NavLink
        to={'/products'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-700 font-semibold  px-3 py-2 rounded-md'
            : 'font-semibold px-3 py-2  '
        }
      >
        Product
      </NavLink>
      <NavLink
        to={'/blogs'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-700 font-semibold  px-3 py-2 rounded-md'
            : 'font-semibold px-3 py-2  '
        }
      >
        Blogs
      </NavLink>
      <NavLink
        to={'/dashboard'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-700 font-semibold  px-3 py-2 rounded-md'
            : 'font-semibold px-3 py-2  '
        }
      >
        Dashboard
      </NavLink>
    </>
  );
  const { user, handileClickLogOut } = useAuth();
  const handileClickLogouts = () => {
    handileClickLogOut();
  };
  return (
    <div>
      <div className="navbar bg-[#82b440] text-[#FFFFFF] rounded-lg items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a className="text-xl font-bold gap-0">
            Tree<span className="text-[#FFA500]">Scape</span>{' '}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end z-10 text-black">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-12 h-12 rounded-full grid justify-center text-center items-center border border-white">
                  {user?.photoURL ? (
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  ) : (
                    <FaUser className="text-3xl text-white" />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    {user?.displayName || 'Not found'}
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={handileClickLogouts}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={'/login'}>
              {' '}
              <a className="btn bg-[#FFA500] font-bold border-none text-white">
                Login
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Naver;
