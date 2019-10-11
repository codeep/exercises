# exercises

Please fork add your solution then open pull request.
Good luck!



1______________

var arr=[];
var n=0;;
 var m=0;

 function sorT(arr){
   
for(var i=0; i<arr.length;i++){
    
    if( typeof(arr[i]) == 'number' )
    n++;
    
     else if (typeof(arr[i]) == 'string')
   m++;
}
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
    
       
    if(word.length < arr[i].length)
   
    
     word=arr[i];
     
   } 
   
  return word;
  
}

console.log(longestW("London is a capital of The Great Britain"));

3_____________________________________________________

 var arr=[];
 
 var newarray=[];
 
function larger(arr,n){

   for(var i=0; i< arr.length;i++){
   
       if(arr[i]>n)
       
       newarray.push(arr[i]);
       
   } 
   
   return newarray;
   
 }
 
 console.log(larger([1,5,4,6,8,9,10],7));
4_________________________________________________________














5________________________________________________

 var arr=[];
 
 function rotate(arr,n){
 
     return arr.splice(n,arr.length).concat(arr.splice(0,n));
 }
 
 console.log(rotate([1,2,3,4,5,6],2));

