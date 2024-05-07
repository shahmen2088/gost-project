import { Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainPage from '../../pages/MainPage/MainPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import PrivateRoute from './PrivateRoute';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/main" element={<MainPage />} />
      </Route>
    </Routes>
  );
};
