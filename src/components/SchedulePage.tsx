import React from 'react';
import {movies} from "./movielist";
import SecNav from './secondNav';
import "./SchedulePage.css";
import {availableDates, dd, setDate} from "./schedule";
import {theatre} from "./theatrelist";
import ModalPopUp from './modalPopUp';
import {toggle} from "./ShedulePage";


setDate(dd);
function onDateClick(event:any){
    setDate(event.target.innerHTML);
}
function SchedulePage() {
 var id = sessionStorage.getItem("MovieId");
 if(sessionStorage.getItem("MovieId")==null || id.length==0){
       window.location.replace("http://localhost:3000/#/movies/home");
       return(
           <h1>Rendering to home....</h1>
       )
   }else{
    var arr=movies.filter(item=>{
        return item.id==parseInt(id);
        }
        
        )
return (
    <div  >
<div className="SchedulePage" id="blur">
    <SecNav/>
<div className="TitleNav">
{
 arr[0].name
}
</div>
<div className="date" id="myDIV">
{
    availableDates.map(item=>{
        var date = new Date();
        var dd = String(date.getDate()).padStart(2, '0');
        if(item.date==dd){
            return(
                <div className="btn">
                <span onClick={onDateClick}>{item.date}</span>
              <span className="day">{item.day}</span>
              </div>
            )
        }else{
            return (
                <div className="btn">
                  <span onClick={onDateClick}>{item.date}</span>
                <span className="day">{item.day}</span>
                </div>
            )
        }
      
       
    })
}
</div>
<div className="mainTheatreBody">
{
    theatre.map(item=>{
        var ButId = item.id+item.time;
        return(
            <div>
            <i className="fa fa-heart"></i>
            <span>{item.name}</span>
            <button id={ButId} value={item.time} onClick={toggle}>
                {item.time}
                </button>
        </div>
        )
      
    })
}
</div>

</div>
<ModalPopUp/>
    </div>

);
   }
       
}

export default SchedulePage;
