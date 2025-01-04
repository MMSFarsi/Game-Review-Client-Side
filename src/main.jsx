import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import AllReviews from './Pages/AllReviews.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import AddReview from './Pages/AddReview.jsx';
import ReviewDetails from './Pages/ReviewDetails.jsx';
import MyReview from './Pages/MyReview.jsx';
import GameWatchList from './Pages/GameWatchList.jsx';
import UpdateReview from './Pages/UpdateReview.jsx';
import Error from './Components/Error.jsx';
import PrivateRoute from './PrivateRoutes/PrivateRoute.jsx';
import ThemeProvider from '../ThemeProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ThemeProvider><MainLayout></MainLayout></ThemeProvider>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/allreviews",
        element: <AllReviews></AllReviews>,
        loader:()=> fetch('https://assignment-10-server-lime-nu.vercel.app/reviews')
      },
      {
        path:"/login",
        element:<Login></Login>,
      }
      ,
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/addreview",
        element:<PrivateRoute><AddReview></AddReview></PrivateRoute>
      },
      {
        path:"/reviewdetails/:id",
        element:<ReviewDetails></ReviewDetails>,
        loader: ({params})=>fetch(`https://assignment-10-server-lime-nu.vercel.app/reviews/${params.id}`)
      },
      {
        path:"/myreview",
        element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
      },
      {
        path:"/gamewatchlist",
        element: <PrivateRoute><GameWatchList></GameWatchList></PrivateRoute>
      },
      {
        path:"/updatereview/:id",
        element:<PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
        loader:({params})=> fetch(`https://assignment-10-server-lime-nu.vercel.app/reviews/${params.id}`)
      },
      { path: "*", 
       element: <Error></Error>      
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
