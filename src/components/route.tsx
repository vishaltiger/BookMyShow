import userEvent from '@testing-library/user-event';
import React from 'react';
import BookedDetails from './BookedDetails';
import BookSeats from './BookSeats';
import Home from './Home';
import ModalPopUp from './modalPopUp';
import MovieScreen from './MovieScreen';
import SchedulePage from './SchedulePage';
function is_numeric(str:string){
    return /^\d+$/.test(str);
}
function RouteId({match}:any){
    console.log(match.params.id);
    if(match.params.id=="home"){
    return(
        <Home/> 
        
    )
    }else if(match.params.id =="schedule"){
       return(
        <SchedulePage />
       )
       
   }else if(match.params.id =="book"){
       return(
         <BookSeats/>
       )

   }
   else if(match.params.id =="bookingDetails"){
      
     return(
    <BookedDetails/>
)
   }
   else if(is_numeric(match.params.id)){
        return(
            <MovieScreen id={match.params.id}/>
        )
    }else{
        return(
            <h1>Error 404 Page Not Found</h1>
        )
    }
}

export default RouteId;
