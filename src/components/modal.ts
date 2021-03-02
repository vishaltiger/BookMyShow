import {vehicles} from "./schedule";
export function iconChange(event){
    var icon = document.getElementById("icon");
    console.log(event.target.innerHTML);
}
export function CurrentSelect(event:any){
    var btn = document.querySelector(".selected");
    btn.classList.remove("selected");
event.target.classList.toggle("selected");

}
export function MouseHover(event:any){

    var id = parseInt(event.target.innerHTML);
    var icon = document.getElementById("icon");
    icon.classList.remove(icon.classList[1]);
    icon.classList.add(vehicles[id-1]);

}
export function selectSeats(){
    var movieId:string = sessionStorage.getItem("MovieId");
    var requiredSeats = document.querySelector(".selected");
    sessionStorage.setItem("RequiredSeats",requiredSeats.innerHTML);
    window.location.replace("http://localhost:3000/#/movies/book/"+movieId+"/");
}