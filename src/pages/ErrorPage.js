import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return ( 
        <main class="h-screen w-full flex flex-col justify-center items-center bg-primary">
            <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div class="bg-[#1A2238] px-2 text-sm rounded rotate-12 absolute text-white">
                Page Not Found
            </div>
            <button class="mt-5">
            <a
                class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
            >
                <span class="relative block px-8 py-3 bg-white rounded-md border border-current">
                    <Link to="/">Go Home</Link>
                </span>
            </a>
            </button>
        </main>
     );
}
 
export default ErrorPage;