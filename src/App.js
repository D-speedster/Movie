
import './App.css';
import { useRoutes} from "react-router-dom";
import React, { useEffect } from 'react';
import Pageroutes from './components/Routes';


function App() {
  let router = useRoutes(Pageroutes)

  return (

    <div>
      {router}
    </div>

  );

}

export default App;
