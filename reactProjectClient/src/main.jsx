import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Costumer from './Copmponents/costumer/Costumer.jsx'
import Admin from './Copmponents/Admin/Admin.jsx'
import ServicesTabs from './Copmponents/servicesTabs/ServicesTabs.jsx'
import Meetings from './Copmponents/meetings/Meetings'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Costumer />,
    errorElement: <div>Costumer not found!</div>,
  },
  {
    path: '/admin',
    element: <Admin/>,
    errorElement: <div>Admin not found!</div>,
    children: [
      {
        path: '',
        element:<p></p>,
      },
      {
        path: 'services',
        element:<ServicesTabs/>,
        errorElement: <div>Services not found!</div>
      },
      {
        path:'meetings',
        element:<Meetings/>,
        errorElement: <div>Meetings not found!</div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
