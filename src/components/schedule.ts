export var  date= new Date();
export  var dd = String(date.getDate()).padStart(2, '0');
export var day = date.getDay();
const DayArr = ["SUN","MON","TUE","WED","THRU","FRI","SAT"];
const currentday = parseInt(dd);
const dates = [currentday,currentday+1,currentday+2,currentday+3];
export const availableDates = [];
for(var i=0;i<dates.length;i++){
    if(i==0){
        availableDates[i] = {"date":dates[i],"day":"TODAY"};     
    }else if(i==1){
        availableDates[i] = {"date":dates[i],"day":"TOM"};
    }else{
        if(day+i>6){
            availableDates[i] = {"date":dates[i],"day":DayArr[(day+i)%6]};   
        }else{
            availableDates[i] = {"date":dates[i],"day":DayArr[(day+i)]};
        }
     
    }

}

export var vehicles=["fa-automobile","fa-bicycle","fa-bus","fa-cab","fa-motorcycle","fa-taxi","fa-automobile","fa-bicycle","fa-bus","fa-cab"];
export function setDate(date:string){
    sessionStorage.setItem("date",date);
}