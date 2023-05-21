import Home from './Home/Home';
import React from 'react';
import Movies from './Movies/Movies';
import Admin from './Admin/Admin';
import AddMovie from './Home/AddMovie';
import { Download } from './M_Download/Download';
import Users from './Admin/Users'
import Register from './Register/Register';
import Login from './Login/Login';
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
      { path: 'addSerie', element: <h1 style={{ color: 'red' }}>addSerie</h1> },
      { path: 'addTrailer', element: <h1 style={{ color: 'red' }}>addTrailer</h1> },
      { path: 'addNews', element: <News></News> },
      { path: 'User-Management', element: <Users /> },
      { path: 'Movies-Management', element: <Movie_mange /> },
      { path: 'Movies-Management/:userId', element: <EditMovie></EditMovie> },
      { path: 'newCollection', element: <Collection></Collection> },
      { path: 'Plans', element: <Plans_Admin></Plans_Admin> },
      {
        path: 'setting/*', element: <Settings></Settings>, children: [
          {path : '' , element : <Home_Setting></Home_Setting>} ,
          {path : 'Home' , element : <Home_Setting></Home_Setting>} ,
          { path: 'Movie', element: <h1 style={{ color: 'red' }}>SALAM</h1> },
          { path: 'Series', element: <h1>Slider Series</h1> },
          { path: 'Slider', element: <Slider></Slider> },
          { path: 'Box-Office', element: <Box_ofiice></Box_ofiice> },
          { path: 'other', element: <Other></Other> }

        ]
      }

    ]
  }
]

export default routes