import React from 'react';
import { Alphabet, Range } from '../Utilities/utilities';
import { BookTickets, ConfirmBooking, LoadBookedSeats } from './bookScript';
import "./BookSeats.css";
import seat from "./seat.png";
class BookSeats extends React.Component {



 render(){
  var SeatsSection1 = Range(1,8);
  var SeatsSection2 = Range(9,16);
  var rows = Range(1,5);
var BookedSeatsarr = LoadBookedSeats();
  return (
    <div>
  
<div className="seatsection">
      {
          <div className="section section1">
      {
          rows.map((item,index)=>{
           
           
              return(
                <div>
              <i className="Alpha">{Alphabet[index]}</i>
              <div>{
                SeatsSection1.map((items)=>{
                  var Sid=Alphabet[index]+(items).toString();
                    if(BookedSeatsarr.includes(Sid)){
                      return(
                        <span  id={Sid} className="notAvailable">{items}</span>
                        )
                    }else{
                      return(
                        <span  id={Sid} onClick={BookTickets} className="available">{items}</span>
                        )
                    }
                   
                })
                
                }
                </div>

                </div>
               
              )
              
          })
      }

      </div>
      
         
          
      }
      {
        <div className="section section2">
     {
          rows.map((item,index)=>{
           
           
              return(
            <div>{
                SeatsSection2.map((items)=>{
                  var Sid=Alphabet[index]+(items).toString();
                    if(BookedSeatsarr.includes(Sid)){
                      return(
                        <span  id={Sid} className="notAvailable">{items}</span>
                        )
                    }else{
                      return(
                        <span  id={Sid} onClick={BookTickets} className="available">{items}</span>
                        )
                    }
                   
                })
                
                }
                </div>
              )
              
          })
      }
      
      </div>
            
      }
    
  </div>
  <div className="image">
  <img src={seat}></img>
  </div>
     
<div className="ConfirmBooking" onClick={ConfirmBooking}>
Pay RS.
</div>
    </div>
  
    );
  }
 
}

export default BookSeats;
