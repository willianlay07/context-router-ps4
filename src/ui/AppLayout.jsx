import { Outlet } from "react-router-dom";

import Nav from "./Nav";

const AppLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default AppLayout;