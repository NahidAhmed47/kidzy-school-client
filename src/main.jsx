import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Home from './components/Home';
import Activity from './components/Activity';
import Departments from './components/Departments';
import Course from './components/Course';
import Contract from './components/Contract';
import Registration from './components/Registration';
import ErrorPage from './components/ErrorPage';
import Enrolled_course from './components/EnrolledCourse';
import loadCourseData from './utilities/loadCourseData'
import Bookmarked from './components/Bookmarked';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    loader: loadCourseData,
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
        path:'course',
        element:<Course></Course>
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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
