import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Post from './pages/Post/Post';
import Edit from './pages/Edit/Edit';
import Feed from './pages/Feed/Feed';
import LerMais from './pages/LerMais/LerMais';

function App() {
  return(
  <Router>
    <Routes>
      <Route exact path="/" Component={Feed}/>
      <Route path="/post" Component={Post}/>
      <Route path="/edit" Component={Edit}/>
      <Route path="/lermais" Component={LerMais}/>
    </Routes>
  </Router>
  )
};

export default App;
