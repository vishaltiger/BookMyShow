import { stringify } from "querystring";
import { BookedTicket } from "../Modal/BookedTicketModal";
import { CurrentMonth, CurrentYear } from "../Utilities/utilities";
import { movies } from "./movielist";
import { theatre } from "./theatrelist";

var bookedSeatsNo:string[];
var bookedCredntials:BookedTicket[]=[];
var fare:string;
export function BookTickets(event:any) {
    var BookedSeatsarr = LoadBookedSeats();
    var seatsRequired = parseInt(sessionStorage.getItem("RequiredSeats"));
    if(countSeats()>=seatsRequired){
    removeSeats();
}
    var id=event.target.id;
    document.getElementById(id).classList.add("booked");
    var num = seatsRequired-countSeats();

    for(var i=0;i<num;i++){
        if(document.getElementById(id).nextElementSibling!=null){
            var x = document.getElementById(id).nextElementSibling.id; 
            if(BookedSeatsarr.includes(x)==false){
                document.getElementById(x).classList.add("booked");
                id=x;
            }
            

        
        }
 
      
    }

     displayFare();
    }

    function countSeats(){
        var seats = document.querySelectorAll(".booked");
        
        return seats.length;
    }

    function removeSeats(){
        var seats = document.querySelectorAll(".booked");
       seats.forEach(item=>{
           item.classList.remove("booked");

       })
    
    }

    function displayFare(){
        console.log(countSeats());
        var seatsRequired = parseInt(sessionStorage.getItem("RequiredSeats"));
        if(countSeats()==seatsRequired){
             fare =(seatsRequired*276).toString();
            var ele:HTMLElement  =  document.querySelector(".ConfirmBooking");
        ele.style.display = "block";
        ele.innerHTML = "Pay Rs. "+fare;
        }else if(countSeats()<seatsRequired){
           var ele:HTMLElement  =  document.querySelector(".ConfirmBooking");
           ele.style.display = "none"; 
        } 
    }

   export  function ConfirmBooking(){
        var ele = document.querySelectorAll(".booked");
        var arr:string[]=[];
        ele.forEach((item:HTMLElement)=>{
            arr.push(item.id);
        }) 
        bookedSeatsNo=arr;
        sessionStorage.removeItem("currentDetails");
        sessionStorage.setItem("currentDetails",JSON.stringify(getCredentials()));
        window.location.replace("http://localhost:3000/#/movies/bookingDetails");
    }
    function getCredentials():BookedTicket{
        var ShedId = sessionStorage.getItem("SheDid");
        var time = ShedId.substring(3,ShedId.length);
        var ThId = ShedId.substring(0,3);
        var date:string = sessionStorage.getItem("date");
        var newDate = date+" "+CurrentMonth()+" "+CurrentYear();
        var movieId = sessionStorage.getItem("MovieId");
        var movieName:string;
        var TheatreName:string;
        movies.forEach(item=>{
            if(item.id==parseInt(movieId)){
            movieName=item.name;
            }
        })
        theatre.forEach(item=>{
            if(item.id==ThId){
            TheatreName=item.name;
            }
        })
        var obj:BookedTicket={id:ShedId,movieName,date:newDate,time,seats:bookedSeatsNo,fare,TheatreName}
        bookedCredntials = JSON.parse(localStorage.getItem("BookedCredentials"));
        if(bookedCredntials==null){
        localStorage.setItem("BookedCredentials",JSON.stringify([]));
        bookedCredntials = JSON.parse(localStorage.getItem("BookedCredentials"));
        }
        bookedCredntials.push(obj);
        localStorage.setItem("BookedCredentials",JSON.stringify(bookedCredntials));
        return obj;
        
    }

    export function  LoadBookedSeats(){
        var bookedseats:any[]=[];
        var ShedId = sessionStorage.getItem("SheDid"); 
        var movieId = sessionStorage.getItem("MovieId");
        var movieName:string;
        var date:string = sessionStorage.getItem("date");
        var newDate = date+" "+CurrentMonth()+" "+CurrentYear();
        movies.forEach(item=>{
            if(item.id==parseInt(movieId)){
            movieName=item.name;
            }
        })
var AllBookedHistory = JSON.parse(localStorage.getItem("BookedCredentials"));
if(AllBookedHistory!=null){
    AllBookedHistory =  AllBookedHistory.filter(item=>item.movieName==movieName && item.id==ShedId && item.date==newDate);
    AllBookedHistory.forEach(item=>{
        item.seats.forEach(items=>{
            bookedseats.push(items);
        })
    })
}
 
    return bookedseats;

    }

    function printBooked(){
        console.log("removed");
    }