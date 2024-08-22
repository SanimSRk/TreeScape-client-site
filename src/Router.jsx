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
import MyCards from './Pages/Dashboards/User/MyCards/MyCards';
import AllUserHandile from './Pages/Dashboards/AdminSection/AllUser/AllUserHandile';
import ManageProducts from './Pages/Dashboards/AdminSection/ManageProduct/ManageProducts';
import Updates from './Pages/Dashboards/AdminSection/Update/Updates';
import Paymens from './Pages/Payments/Paymens';

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
      // admin all rout section ---------------
      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>,
      },
      {
        path: 'additems',
        element: <AddItems></AddItems>,
      },
      {
        path: 'all-users',
        element: <AllUserHandile></AllUserHandile>,
      },
      {
        path: 'manage-product',
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: '/dashboard/updates/:id',
        element: <Updates></Updates>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update-deatils/${params.id}`),
      },
      {
        path: '/dashboard/payments',
        element: <Paymens></Paymens>,
      },
      // -----------------user rout section--------------
      {
        path: 'my-products',
        element: <MyCards></MyCards>,
      },
    ],
  },
]);
