// src/router/index.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
 
const router = createBrowserRouter([
    {
        path:'/',
        element: <Home />,
    },
    {
        path:'/About',
        element: <About />,
    }
])
 
export default router