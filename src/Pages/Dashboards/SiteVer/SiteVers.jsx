import { AiFillProduct } from 'react-icons/ai';
import { FaHistory } from 'react-icons/fa';
import { IoBagAddOutline, IoHome } from 'react-icons/io5';
import { MdAddCard, MdOutlineMenuOpen } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import useUsers from '../../../Hooks/useUsers';
import { HiMiniUserGroup } from 'react-icons/hi2';

const SiteVers = () => {
  const { userData, refetch } = useUsers();
  console.log(userData);
  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            className="menu  min-h-full w-60 p-4  gap-2
           bg-[#82b440] text-[#FFFFFF]"
          >
            {/* Sidebar content here */}
            {userData?.role === 'user' && (
              <>
                <li>
                  <NavLink
                    to={'usersHome'}
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-gray-700 font-semibold '
                        : 'font-semibold text-white'
                    }
                  >
                    <IoHome className="text-2xl" />
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'usersHome'}
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-gray-700 font-semibold '
                        : 'font-semibold  text-white'
                    }
                  >
                    <MdAddCard className="text-2xl" />
                    My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'usersHome'}
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-gray-700 font-semibold '
                        : 'font-semibold  text-white'
                    }
                  >
                    <FaHistory className="text-2xl" />
                    Payment History
                  </NavLink>
                </li>
              </>
            )}

            <li>
              <NavLink
                to={'adminHome'}
                lassName={({ isActive }) =>
                  isActive
                    ? 'bg-gray-700 font-semibold '
                    : 'font-semibold  text-white'
                }
              >
                <IoHome className="text-2xl" />
                Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'additems'}
                lassName={({ isActive }) =>
                  isActive
                    ? 'bg-gray-700 font-semibold '
                    : 'font-semibold  text-white'
                }
              >
                <IoBagAddOutline className="text-2xl" />
                Add Items
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/'}
                lassName={({ isActive }) =>
                  isActive
                    ? 'bg-gray-700 font-semibold '
                    : 'font-semibold  text-white'
                }
              >
                <MdOutlineMenuOpen className="text-2xl" />
                Manage Items
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/'}
                lassName={({ isActive }) =>
                  isActive
                    ? 'bg-gray-700 font-semibold '
                    : 'font-semibold  text-white'
                }
              >
                <HiMiniUserGroup className="text-2xl" />
                All Users
              </NavLink>
            </li>
            {/* users and admin  use section -------------      */}
            <p className="border border-white my-4"></p>
            <li>
              <NavLink
                to={'/'}
                c
                lassName={({ isActive }) =>
                  isActive
                    ? 'bg-gray-700 font-semibold '
                    : 'font-semibold  text-white'
                }
              >
                <IoHome className="text-2xl" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/products'}
                className={({ isActive }) =>
                  isActive
                    ? 'bg-gray-700 font-semibold '
                    : 'font-semibold  text-white'
                }
              >
                <AiFillProduct className="text-2xl" />
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SiteVers;
