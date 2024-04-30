import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  return 45 > 56 ? <Outlet /> : <Navigate to="/login" replace />;
}
