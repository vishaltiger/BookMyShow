export function UniquId(){
    var number = Math.random() // 0.9394456857981651
    number.toString(36); // '0.xtis06h6'
 var id = number.toString(36).substr(2, 9); // 'xtis06h6'


return id;
}

export function Range(num1:number,num2:number):number[]{
var arr:number[]=[];
for(var i=num1;i<=num2;i++){
    arr.push(i);
}
return arr;
}

export var Alphabet = ["A","B","C","D","E"];
export function CurrentMonth():string{
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
  
    var d = new Date();
    var n = month[d.getMonth()];
    return n;
}
export function CurrentYear():string{
    var d = new Date();
    var n = d.getFullYear();
    return n.toString();
}