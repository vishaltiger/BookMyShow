import React from 'react';
import "./modalPopUp.css";
import "./modalPopUp.css";
import {CurrentSelect,MouseHover,iconChange,selectSeats} from "./modal";
import { vehicles } from './schedule';

class ModalPopUp extends React.Component {
  
  render(){
  
  return (
    <div className="modal-container">
   <p className="title">How Many Seats?</p>
   <div><i className="fa fa-automobile" id="icon" onMouseOver={iconChange}></i></div>
   <ul>
       <li className="selected" onClick={CurrentSelect} onMouseOver={MouseHover}>1</li>
       {
         vehicles.map((item,index)=>{
             if(index>0){
                 return (
                    <li onClick={CurrentSelect} onMouseOver={MouseHover}>{index+1}</li>  
                 )
             }
         })
       }
   
       
   </ul>
   <span className="footer">
       <p className="price">Rs. 276<span>Available</span></p>
       <div className="button" onClick={selectSeats}>Select Seats</div>
   </span>
  </div>
    
    );
  }
 
}

export default ModalPopUp;
