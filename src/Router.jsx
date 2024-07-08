import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home';
import Login from './Compoment/Form/Login/Login';
import SignUp from './Compoment/Form/SignUp/SignUp';

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
    ],
  },
]);
