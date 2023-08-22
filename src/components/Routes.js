
import React from 'react';
import Movies from '../Pages/Movies/Movies';
import AddMovie from './Admin/addMovie/AddMovie';
import { Download } from './M_Download/Download';
import Users from './Admin/Users/Users'
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Movie_mange from './Admin/Movie_Manage/Movie_mange'
import Collection from './Admin/Ncollection/Collection';
import InfoAdmin from './Admin/InfoAdmin/InfoAdmin';
import EditMovie from './Admin/EditMovie/EditMovie';
import Plans_Admin from './Admin/Plans/Plans';
import News from './Admin/News/News';
import Settings from './Admin/Settings/Settings';
import Other from './Admin/Settings/other';
import Box_ofiice from './Admin/Settings/Box_ofiice';
import Slider from './Admin/Settings/Slider';
import Home_Setting from './Admin/Settings/Home';
import AddSeries from './Admin/addSeries/addSeries'
import Comments from './Admin/Comments/Comments';
import Movie_Series from './Admin/Series_Manage/Series_Manage';
import Top250 from './Admin/Settings/Top250'
import AddTrailer from './Admin/addTrailer/addTrailer';
import IMDB from './Admin/IMDB/IMDB';
import Home from '../Pages/Home/Home';
import Admin from '../Pages/Admin/Admin';

let routes = [
  { path: '*', element: <h1>Sorry , Page Not Found</h1> },
  { path: '/', element: <Home /> },
  { path: '/Movie', element: <h1 style={{ color: '#FFF' }}>404</h1> },
  { path: '/Movie/:userId', element: <Download></Download> },
  { path: '/Movies', element: <Movies></Movies> },
  { path: '/new', element: <AddMovie></AddMovie> },
  { path: '/Register', element: <Register></Register> },
  { path: '/Login', element: <Login></Login> },

  {
    path: '/admin/*', element: <Admin />, children: [
      { path: '', element: <InfoAdmin /> },
      { path: 'addMovie', element: <AddMovie /> },
      { path: 'addSerie', element: <AddSeries></AddSeries> },
      { path: 'addTrailer', element: <AddTrailer></AddTrailer> },
      { path: 'addNews', element: <News></News> },
      { path: 'User-Management', element: <Users /> },
      { path: 'Series-Management', element: <Movie_Series /> },
      { path: 'Movies-Management', element: <Movie_mange /> },
      { path: 'Movies-Management/:userId', element: <EditMovie></EditMovie> },
      { path: 'newCollection', element: <Collection></Collection> },
      { path: 'Comments-Management', element: <Comments /> },
      { path: 'Plans', element: <Plans_Admin></Plans_Admin> },
      { path: 'IMDB', element: <IMDB></IMDB> },
      {
        path: 'setting/*', element: <Settings></Settings>, children: [
          { path: '', element: <Home_Setting></Home_Setting> },
          { path: 'Home', element: <Home_Setting></Home_Setting> },
          { path: 'Movie', element: <h1 style={{ color: 'red' }}>SALAM</h1> },
          { path: 'Series', element: <h1>Slider Series</h1> },
          { path: 'Slider', element: <Slider></Slider> },
          { path: 'Box-Office', element: <Box_ofiice></Box_ofiice> },
          { path: 'other', element: <Other></Other> },
          { path: 'Top250', element: <Top250></Top250> }

        ]
      }

    ]
  }
  , { path: '/User', element: <h1 style={{ color: 'white', textAlign: 'center' }}>Hello  To user Panel</h1> }
]

export default routes