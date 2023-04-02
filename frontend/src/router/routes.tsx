import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Outlet } from "react-router-dom";
import ProtectedRoute from "./Protected-route";

import { Login } from "../components/Login";
import { Register } from '../components/Register';
import App from "../App";

export const Auth = () => {
  return (
    <BrowserRouter basename={'/'}>
      <Routes>

        <Route element={<Outlet />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Register />} />
        </Route>

        <Route path="/" element={<ProtectedRoute> <App /> </ProtectedRoute>}>
          <Route path="home" element={<App />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

