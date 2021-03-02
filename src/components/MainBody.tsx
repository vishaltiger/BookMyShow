import React from 'react';
import "./MainBody.css";
import {movies} from "./movielist";

function onMovieClick(event:any){
  console.log("id:"+event.target.id);
  var arr = movies.filter(item=>{
    return item.id==parseInt(event.target.id);
  })
  var url = "http://localhost:3000/#/movies/"+event.target.id+"/";
window.location.replace(url);
}
function MainBody() {

  return (
    <div className="MainBody">
   <p className="bodyHeading">Recommended Movies</p>
   <div  className="carousel" data-flickity='{ "groupCells": true,"groupCells": 5 }'>
   {
         movies.map(item=>{
             return(
                <div className="carousel-cell" >
                  <img src={item.url} id={item.id.toString()} onClick={onMovieClick}/>
                  </div>
                )
 
         })
   }

   </div>
    </div>
  );
}

export default MainBody;
