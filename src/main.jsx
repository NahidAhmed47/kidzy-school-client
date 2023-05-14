import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Activity from './pages/StudentsPages/Activity/Activity';
import Departments from './pages/DefaultPages/Departments/Departments';
import Contract from './pages/DefaultPages/Contract/Contract';
import Registration from './pages/Login/Registration';
import ErrorPage from './pages/Shared/ErrorPage/ErrorPage';
import Enrolled_course from './pages/StudentsPages/EnrolledCourse/EnrolledCourse';
import Bookmarked from './pages/StudentsPages/BookmarkedCourse/Bookmarked';
import Home from './pages/DefaultPages/Home/Home';
import Courses from './pages/DefaultPages/Courses/Courses';
import Login from './pages/Login/Login';
import AuthProviders from './Providers/AuthProviders';
import Inbox from './pages/TeachersPages/Inbox/Inbox';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/TeachersPages/Dashboard/DashboardPages/Overview';

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
        path:'inbox',
        element:<Inbox></Inbox>
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
  },
  {
    path:'/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children:[
      {
        path: 'overview',
        element: <Overview></Overview>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1400px] mx-auto'>
       <AuthProviders>
         <RouterProvider router={router}></RouterProvider>
       </AuthProviders>
  </div>
)
