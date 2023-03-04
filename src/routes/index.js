import React,{lazy} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const SinglePage = lazy(() => import("../pages/SinglePage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

function AllRoutes() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="country/:id" element={<SinglePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
    );
  }
  
  export default AllRoutes;