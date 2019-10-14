# exercises

Please fork add your solution then open pull request.
Good luck!



1______________

var arr=[];
function sorT(arr){
 let n=0;
 let m=0;
   
for(var i=0; i<arr.length;i++){
    
    if( typeof(arr[i]) == 'number' ){
    n++;
    }
     else if (typeof(arr[i]) == 'string'){
   m++;
   }
}
 return "Numbers :" + n + " " + "Strings :" + m;
}
console.log(sorT([1,"10","hi",9]));
or
const arr=[];

function sorT(arr){
    
    let n=0;
    
    let m=0;
   
    arr.forEach(elm => {
        
    
    if( typeof(elm) == 'number' ){
    
    n++;
    }
    
     else if (typeof(elm) == 'string'){
     
    m++;
    
    }});

return "Numbers :" + n + " " + "Strings :" + m;

}
console.log(sorT([1,"10","hi",9]));


2__________________________________________________

 function longestW (str){
 
    let word="";
    
    var str=String(str);
    
    var arr=Array(arr);
    
    var arr= str.trim().split(" ");
    
    for(var i=0;i<arr.length;i++){
    
       
    if(word.length < arr[i].length){
   
    
     word=arr[i];
     }
     
   } 
   
  return word;
  
}

console.log(longestW("London is a capital of The Great Britain"));

3_____________________________________________________

 var arr=[];
 
 var newarray=[];
 
function larger(arr,n){

   for(var i=0; i< arr.length;i++){
   
       if(arr[i]>n){
       
       newarray.push(arr[i]);
       }
   } 
   
   return newarray;
   
 }
 
 console.log(larger([1,5,4,6,8,9,10],7));
4_________________________________________________________


function convert(num) {

  if (num == 0 )  {
  return "zero"; 
  }
  else if( num> 999){
  
  return "Too big";
  }
  else return convert_hundreds(num);
  
}

var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];



function convert_hundreds(num) {

  if (num > 99) {
  
    return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
    
  } else {
  
    return convert_tens(num);
    
  }
  
}

function convert_tens(num) {

  if (num < 10) return ones[num];
  
  
  else if (num >= 10 && num < 20) return teens[num - 10];
  
  
  else {
  
   return tens[Math.floor(num / 10)] + " " + ones[num % 10];}
}


console.log(convert(28));




5________________________________________________

 var arr=[];
 
 function rotate(arr,n){
 
     return arr.splice(n,arr.length).concat(arr.splice(0,n));
 }
 
 console.log(rotate([1,2,3,4,5,6],2));

