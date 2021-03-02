import React from 'react';
import {movies} from "./movielist";
import SecNav from './secondNav';
import TopNav from './TopNav';
import "./movieScreen.css";
import { Link } from 'react-router-dom';
import {availableDates} from "./schedule";



function cancel(){
    window.location.replace("http://localhost:3000/#/movies/home");
    window.location.reload();
}
function BookTicket(event:any){
 sessionStorage.setItem("MovieId",event.target.id);
}
console.log(availableDates);


function MovieScreen(props:any) {
    var arr=movies.filter(item=>{
        return item.id==parseInt(props.id);
    })
    var Shurl = "/movies/schedule/"+props.id+"/";
  return (
    <div>
        <TopNav/>
        <SecNav/>
    
 
     <div className="banner">
 <button className="cancel" onClick={cancel}>Cancel</button>
         {
           arr.map(item=>{

         return(
             <div className="bannerItem">
                
                 <img src={item.url}/>
                 <div>
                 <p className="bannerName">{item.name}</p>
                 
                 <p className="genre">{item.genre}</p>
                 <Link to={Shurl} >
                   <button  id={item.id.toString()} onClick={BookTicket}>Book Ticket</button>
                   </Link>
                 </div>
                 

             </div>
             
             
         )
     })
    }
     </div>
   
 

    </div>
  );
}

export default MovieScreen;
