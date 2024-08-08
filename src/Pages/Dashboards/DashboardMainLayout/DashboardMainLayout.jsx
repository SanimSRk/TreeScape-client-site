import { Outlet } from 'react-router-dom';
import SiteVers from '../SiteVer/SiteVers';

const DashboardMainLayout = () => {
  return (
    <div className=" lg:flex lg:gap-7">
      <div className="w-60">
        <SiteVers></SiteVers>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardMainLayout;
