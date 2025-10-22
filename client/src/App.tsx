import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home, Restaurants } from './pages'
import Mainlayout from './layouts/main-layout'
import Login from './auth/login'

function LayoutWrapper() {
  return (
    <Mainlayout>
      <Outlet />
    </Mainlayout>
  )
}

function App() {
  const routes = createBrowserRouter([
    {
      path: "/login",
      element: (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100'>
          <Login />
        </div>
      )
    },
    {
      path: "/",
      element: <LayoutWrapper />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/restaurants",
          element: <Restaurants />
        },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
