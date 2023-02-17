import { Sidebar } from '../components/Sidebar';

import { Outlet, RouterProvider } from 'react-router-dom';
import { router } from '../routes';


export function Default() {
  return(
    <div className="layout">
      <Sidebar />

        <div className="content">
          <Outlet />
        </div>
    </div>
  );
}