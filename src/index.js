import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Breakfast from './pages/Breakfast/Breakfast';
import Dinner from './pages/Dinner/Dinner';
import Fall from './pages/Fall/Fall';
import Hiking from './pages/Hiking/Hiking';
import Lunch from './pages/Lunch/Lunch';
import Spring from './pages/Spring/Spring';
import Summer from './pages/Summer/Summer';
import Wildlife from './pages/Wildlife/Wildlife';
import Winter from './pages/Winter/Winter';

import dashboardTheme from './dashboardTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'spring',
        element: <Spring />
      },
      {
        path: 'summer',
        element: <Summer />
      },
      {
        path: 'fall',
        element: <Fall />
      },
      {
        path: 'winter',
        element: <Winter />
      },
      {
        path: 'hiking',
        element: <Hiking />
      },
      {
        path: 'wildlife',
        element: <Wildlife />
      },
      {
        path: 'breakfast',
        element: <Breakfast />
      },
      {
        path: 'lunch',
        element: <Lunch />
      },
      {
        path: 'dinner', 
        element: <Dinner />
      }
    ]
  }
]);

root.render(
  <ThemeProvider theme={dashboardTheme}>
      <RouterProvider router={router} />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
