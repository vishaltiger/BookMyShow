import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
import Slider from "./components/slider";
import TopNav from "./components/TopNav";
import SecNav from "./components/secondNav";
import MainBody from "./components/MainBody";

import RouteId from './components/route';
import Home from './components/Home';

class App extends React.Component{
componentWillMount(){
  if(window.location.href=="http://localhost:3000/#/" || window.location.href=="http://localhost:3000/")
  window.location.replace("http://localhost:3000/#/movies/home");
}
 render(){
  return (
    <div className="App">

 <Router> 
   
<Switch> 
<Route path="/movies/:id" children={RouteId}/>
</Switch> 
   </Router>
    </div>
  );
 }
 
}

export default App;
