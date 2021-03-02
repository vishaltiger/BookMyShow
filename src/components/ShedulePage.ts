export function toggle(event:any){
    var blur = document.getElementById("blur");
    var modal:HTMLElement = document.querySelector(".modal-container");
    blur.classList.toggle('active');
    modal.style.visibility="visible";
    sessionStorage.setItem("SheDid",event.target.id);
   
}
