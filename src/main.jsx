import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Activity from './pages/Activity/Activity';
import Departments from './pages/Departments/Departments';
import Contract from './pages/Contract/Contract';
import Registration from './pages/Login/Registration';
import ErrorPage from './pages/Shared/ErrorPage/ErrorPage';
import Enrolled_course from './pages/EnrolledCourse/EnrolledCourse';
import Bookmarked from './pages/BookmarkedCourse/Bookmarked';
import Home from './pages/Home/Home/Home';
import Courses from './pages/Courses/Courses';
import Login from './pages/Login/Login';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    loader: ()=> fetch('http://localhost:5000/courses'),
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'activity',
        element:<Activity></Activity>
      },
      {
        path:'departments',
        element:<Departments></Departments>
      },
      {
        path:'courses',
        element:<Courses></Courses>,
        loader: ()=> fetch('http://localhost:5000/courses'),
      },
      {
        path:'contract',
        element:<Contract></Contract>
      },
      {
        path:'enrolled_course',
        element:<Enrolled_course></Enrolled_course>
      },
      {
        path:'bookmarked',
        element:<Bookmarked></Bookmarked>
      },
      {
        path:'registration',
        element:<Registration></Registration>
      },
      {
        path:'login',
        element: <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1400px] mx-auto'>
    <React.StrictMode>
       <RouterProvider router={router}></RouterProvider>
     </React.StrictMode>
  </div>
)
