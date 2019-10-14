1. Enter a number. Reverse its first and last digits. Print the new number.
Input: 13 
Output: 31

Input: 895796
Output: 695798
  

let num = 895796;
let firstDig = num%10;
let str = num.toString();
let change = str.replace(str[str.length-1],str[0]);
let answer = parseInt(change.replace(change[0],firstDig));


---------------

2. Write down a function which will receive 2 arrays of numbers merge them and return second biggest element of merged array.

Input: [1, 3, 6, 8]; [2, 3, 6, 7]
Output: 7

Input [1, 4]; [3, 6]
Output: 4
 
function mergeAndMax(arr1,arr2){
 let conc =  arr1.concat(arr2);
 let dam = conc.sort((a,b)=>a-b);
 return dam[dam.length-2];
}

---------------

3. Write down a function which will receive an array of numbers and remove duplicates from it (using Set)
Input: [1, 3, 5, 2, 5, 2, 6]
Output: [1, 3, 5, 2, 6]

Input: [1, 1, 1, 3]
Output: [1, 3]
  

function removeDuplicate(arr){
 let newSet = new Set(arr);
 return [...newSet];
}

---------------

4. Create an implementation of the rotational cipher, also sometimes called the Caesar cipher. 
The Caesar cipher is a simple shift cipher that relies on transposing all the letters in the alphabet using an 
integer key between 0 and 26. Using a key of 0 or 26 will always yield the same output due to modular arithmetic. 
The letter is shifted for as many values as the value of the key.

1. Encode function
  Input: abc, 1
  Output: bcd

  Input: Hello world, 7
  Output Olssv dvysk

2. Decode function
  Input: Olssv dvysk, 7
  Output: Hello world

  Input: bcd, 1
  Output: abc
  
---------------

5. Write down a function which will print the number of the rest seconds until the current day's end.
Example: if current time is 23:59:45 function should print 15
Example: if current time is 23:50:45 function should print 555

function minutesUntilNextDay(){
 let date = new Date();
 return (23-date.getHours()) * 3600 + (59 - date.getMinutes())*60 + (59-date.getSeconds());
}

---------------

6. Write down a function which will print week day based on provided day.
Input: "2019/10/14"
Output: "Monday"

Input: "2014/09/12"
Output: "Friday"


function getDay(y,m,d){
   const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   var date = new Date(y,m-1,d);
   return days[date.getDay()];
}

