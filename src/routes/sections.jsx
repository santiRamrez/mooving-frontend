import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

// import { getCarriers } from '../http/carriers';

export const LandingPage = lazy(() => import('src/pages/landing'));
export const IndexPage = lazy(() => import('src/pages/app'));
export const ShipmentsPage = lazy(() => import('src/pages/shipments'));
export const CarrierPage = lazy(() => import('src/pages/carrier'));
export const RegisterUserView = lazy(() => import('src/pages/registerUser'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const PetitionersPage = lazy(() => import('src/pages/petitioners'));
export const ProfilePage = lazy(() => import('src/pages/profile'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: <LandingPage />,
      index: true,
    },
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: 'dashboard', element: <IndexPage /> },
        { path: 'carrier', element: <CarrierPage /> },
        { path: 'petitioner', element: <PetitionersPage /> },
        { path: 'shipments', element: <ShipmentsPage /> },
        { path: 'profile/:profileId', element: <ProfilePage /> },
      ],
    },
    {
      path: 'register',
      element: <RegisterUserView />,
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
