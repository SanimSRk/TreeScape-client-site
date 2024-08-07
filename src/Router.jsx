import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home';
import Login from './Compoment/Form/Login/Login';
import SignUp from './Compoment/Form/SignUp/SignUp';
import DashboardMainLayout from './Pages/Dashboards/DashboardMainLayout/DashboardMainLayout';
import Products from './Pages/Products/Products';
import UserHome from './Pages/Dashboards/User/UserHmoe/UserHome';
import AdminHome from './Pages/Dashboards/AdminSection/AdminHome/AdminHome';
import AddItems from './Pages/Dashboards/AdminSection/AddItems/AddItems';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: '/products',
        element: <Products></Products>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardMainLayout></DashboardMainLayout>,
    children: [
      {
        path: 'usersHome',
        element: <UserHome></UserHome>,
      },
      // admin al rout section ---------------
      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>,
      },
      {
        path: 'additems',
        element: <AddItems></AddItems>,
      },
    ],
  },
]);
