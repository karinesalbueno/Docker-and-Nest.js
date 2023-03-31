import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../components/Login';
import { Register } from '../components/Register';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [
      {
        path: "sign-up/",
        element: <Register />,
      },
    ]
  },
]);
