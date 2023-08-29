import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '2-layouts/appLayout'
import { AuthLayout } from '2-layouts/authLayout'
import { LoginPage } from '3-pages/login/ui/page'
import { MainPage } from '3-pages/main/ui/page'
import {SwipingPage} from "3-pages/swiping/ui/page";
import {SettingsPage} from "3-pages/settings/ui/page";
import { PATH_PAGE, RouteErrorBoundary } from '7-shared/lib/router'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        path: PATH_PAGE.root,
        element: <MainPage />,
      },
      {
        path: PATH_PAGE.settings,
        element: <SettingsPage />,
      },
      {
        path: PATH_PAGE.swiping,
        element: <SwipingPage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        path: PATH_PAGE.login,
        element: <LoginPage />,
      },
    ],
  },
])
