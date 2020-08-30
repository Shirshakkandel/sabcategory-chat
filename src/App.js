import React from 'react';

import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'

function App() {


  //--=====================================================================================//

  return (
  <div className= "app">
   <h1>Slack clone </h1>

    {/* Header */}
    <Header/>
    <Sidebar/>
    {/* Sidebar */}
    {/* React-Router ->Chat screen  */}

  </div>
  );
}

export default App;
