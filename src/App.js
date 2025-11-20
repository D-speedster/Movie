
import './App.css';
import { useRoutes } from "react-router-dom";
import React, { Suspense, lazy } from 'react';

// Lazy load pages
const Home = lazy(() => import('./Pages/Home/Home'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const Series = lazy(() => import('./Pages/Series/Series'));
const Login = lazy(() => import('./Pages/Login/Login'));
const Register = lazy(() => import('./Pages/Register/Register'));
const Admin = lazy(() => import('./Pages/Admin/Admin'));
const Download = lazy(() => import('./components/M_Download/Download').then(module => ({ default: module.Download })));

// Admin components
const AddMovie = lazy(() => import('./components/Admin/addMovie/AddMovie'));
const AddSeries = lazy(() => import('./components/Admin/addSeries/addSeries'));
const AddTrailer = lazy(() => import('./components/Admin/addTrailer/addTrailer'));
const Users = lazy(() => import('./components/Admin/Users/Users'));
const Movie_mange = lazy(() => import('./components/Admin/Movie_Manage/Movie_mange'));
const Collection = lazy(() => import('./components/Admin/Ncollection/Collection'));
const InfoAdmin = lazy(() => import('./components/Admin/InfoAdmin/InfoAdmin'));
const EditMovie = lazy(() => import('./components/Admin/EditMovie/EditMovie'));
const Plans_Admin = lazy(() => import('./components/Admin/Plans/Plans'));
const News = lazy(() => import('./components/Admin/News/News'));
const Settings = lazy(() => import('./components/Admin/Settings/Settings'));
const Other = lazy(() => import('./components/Admin/Settings/other'));
const Box_ofiice = lazy(() => import('./components/Admin/Settings/Box_ofiice'));
const Slider = lazy(() => import('./components/Admin/Settings/Slider'));
const Home_Setting = lazy(() => import('./components/Admin/Settings/Home'));
const Comments = lazy(() => import('./components/Admin/Comments/Comments'));
const Movie_Series = lazy(() => import('./components/Admin/Series_Manage/Series_Manage'));
const Top250 = lazy(() => import('./components/Admin/Settings/Top250'));
const IMDB = lazy(() => import('./components/Admin/IMDB/IMDB'));

const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    color: '#fff',
    fontSize: '24px'
  }}>
    در حال بارگذاری...
  </div>
);

const routes = [
  { path: '*', element: <h1>Sorry, Page Not Found</h1> },
  { path: '/', element: <Home /> },
  { path: '/Movie', element: <h1 style={{ color: '#FFF' }}>404</h1> },
  { path: '/Movie/:userId', element: <Download /> },
  { path: '/Movies', element: <Movies /> },
  { path: '/Series', element: <Series /> },
  { path: '/Register', element: <Register /> },
  { path: '/Login', element: <Login /> },
  {
    path: '/admin/*', 
    element: <Admin />, 
    children: [
      { path: '', element: <InfoAdmin /> },
      { path: 'addMovie', element: <AddMovie /> },
      { path: 'addSerie', element: <AddSeries /> },
      { path: 'addTrailer', element: <AddTrailer /> },
      { path: 'addNews', element: <News /> },
      { path: 'User-Management', element: <Users /> },
      { path: 'Series-Management', element: <Movie_Series /> },
      { path: 'Movies-Management', element: <Movie_mange /> },
      { path: 'Movies-Management/:userId', element: <EditMovie /> },
      { path: 'newCollection', element: <Collection /> },
      { path: 'Comments-Management', element: <Comments /> },
      { path: 'Plans', element: <Plans_Admin /> },
      { path: 'IMDB', element: <IMDB /> },
      {
        path: 'setting/*', 
        element: <Settings />, 
        children: [
          { path: '', element: <Home_Setting /> },
          { path: 'Home', element: <Home_Setting /> },
          { path: 'Movie', element: <h1 style={{ color: 'red' }}>SALAM</h1> },
          { path: 'Series', element: <h1>Slider Series</h1> },
          { path: 'Slider', element: <Slider /> },
          { path: 'Box-Office', element: <Box_ofiice /> },
          { path: 'other', element: <Other /> },
          { path: 'Top250', element: <Top250 /> }
        ]
      }
    ]
  },
  { path: '/User', element: <h1 style={{ color: 'white', textAlign: 'center' }}>Hello To user Panel</h1> }
];

function App() {
  let router = useRoutes(routes);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div>
        {router}
      </div>
    </Suspense>
  );
}

export default App;
