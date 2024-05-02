import { Navigate, Outlet } from 'react-router-dom';
import { checkingUserAuthorization } from '../../shared/utils/userVerificationUtils';

export default function PrivateRoute() {
  let isLoggedIn = false;
  checkingUserAuthorization().then((data) => {
    if (data) {
      isLoggedIn = true;
    }
  });
  const JSx = setTimeout(
    () => (isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />),
    1000,
  );

  return JSx;
}
