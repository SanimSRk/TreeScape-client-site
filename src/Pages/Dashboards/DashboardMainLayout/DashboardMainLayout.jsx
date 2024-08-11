import { Outlet } from 'react-router-dom';
import SiteVers from '../SiteVer/SiteVers';

const DashboardMainLayout = () => {
  return (
    <div className=" lg:flex gap-16">
      <div className="w-60">
        <SiteVers></SiteVers>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardMainLayout;
