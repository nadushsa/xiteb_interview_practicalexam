import React from 'react';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import './App.css';

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className='app'>
        <QueryClientProvider client = {queryClient}>
          <Navbar />
          <Outlet />
        </QueryClientProvider>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
