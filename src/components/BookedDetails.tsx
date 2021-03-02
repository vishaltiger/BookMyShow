import React from 'react';
import TopNav from './TopNav';
import "./BookedDetails.css";
class BookedDetails extends React.Component {

render(){
 var arr =JSON.parse(sessionStorage.getItem("currentDetails"));
  return (
    <div>
<TopNav/>
<div className="DetailsContainer">
<p>ORDER SUMMARY</p>

 <div>
       <div className="ticketname">
       <h2>{arr.movieName}</h2>
       <span>Tickets: <strong>{arr.seats.length}</strong></span>
       </div>
            <p>{arr.TheatreName}</p>
            <p>{arr.date}</p>
            <p>{arr.time}</p>
            <h3>{
                arr.seats.map(seat=>{
                    return(
                        <span>{seat}</span>
                    )
                })
                }
            </h3>
 </div>
      <p>Sub Total:&nbsp;&nbsp;<strong>Rs. {arr.fare}</strong></p>      
            
    </div>
    </div>
  
    );
  }
 
}

export default BookedDetails;
