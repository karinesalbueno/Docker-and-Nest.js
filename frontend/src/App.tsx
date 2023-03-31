import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './components/Login'
import { Register } from './components/Register';
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: 'hometa :D',
  },
  {
    path: "sign-up/",
    element: <Register />,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
