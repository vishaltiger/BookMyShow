import React from 'react';
import Slider from "./slider";
import TopNav from "./TopNav";
import SecNav from "./secondNav";
import MainBody from "./MainBody";
import { dd, setDate } from './schedule';



class Home extends React.Component {
 
  render(){
    setDate(dd);
    return (
      <div className="Home">
        <TopNav/>
        <SecNav/>
   <Slider/>
   <MainBody/>
  
      </div>
    );
  }
 
}

export default Home;
