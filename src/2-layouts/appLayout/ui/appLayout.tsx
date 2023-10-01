import {Outlet} from "react-router-dom";

import {AppHeader} from "4-widgets/appHeader";

export const AppLayout = () => {
  return (
    <div>
      <AppHeader/>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
