import { Outlet } from 'react-router-dom';
import Naver from '../Compoment/Naver/Naver';
import Footer from '../Compoment/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <Naver></Naver>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
