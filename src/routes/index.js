import React,{Suspense, lazy} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import ContentLoader from '../components/Loader';

const Home = lazy(() => import("../pages/Home"));
const SinglePage = lazy(() => import("../pages/SinglePage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

function AllRoutes() {
    return (
        <Suspense loading={<ContentLoader/>}>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="country/:id" element={<SinglePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            </BrowserRouter>
        </Suspense>
    );
  }
  
  export default AllRoutes;