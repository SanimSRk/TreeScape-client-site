import { Outlet } from 'react-router-dom';
import Naver from '../Compoment/Naver/Naver';

const MainLayout = () => {
  return (
    <div>
      <Naver></Naver>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
