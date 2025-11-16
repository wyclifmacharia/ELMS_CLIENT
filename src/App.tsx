import { RouterProvider } from 'react-router/dom'
import { createHashRouter, } from 'react-router'
import './App.css'
import Error from './components/error/Error'
import { Register } from './components/auth/Register'
import { Login } from './components/auth/Login'
import { Verification } from './components/auth/Verification'
import LandingPage from './pages/LandingPage'
import { AboutPage } from './pages/AboutPage'
import { Services } from './components/hero/Service '

function App() {

  const router = createHashRouter([
    {
      path: '/',
      element:<h1><LandingPage/> </h1>

    },
     {
      path: '/About',
      element:<h1><AboutPage/> </h1>
   },
        {
      path: '/Service',
      element:<h1><Services/> </h1>

    },
        {
      path: '/Contact',
      element:<h1>Welcome to the contact page  </h1>

    },
  
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/verify',
      element: <Verification />
    },
    {
      path: '*',
      element:<h1><Error/> </h1>
   }
    

  ])
 

  return (
   <>

   <RouterProvider router = {router} />

  </>
  )
}


export default App
