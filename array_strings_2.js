1. Enter a number. Reverse its first and last digits. Print the new number.
Input: 13 
Output: 31

Input: 895796
Output: 695798
  

function revDigits(num){
var digits = num.toString().split('');
var arrDigits = digits.map(Number)
let n=arrDigits[0];
arrDigits[0]=arrDigits[arrDigits.length-1];
arrDigits[arrDigits.length-1]=n;
let k=arrDigits.join('');
return k;
}
---------------

2. Write down a function which will receive 2 arrays of numbers merge them and return second biggest element of merged array.

Input: [1, 3, 6, 8]; [2, 3, 6, 7]
Output: 7

Input [1, 4]; [3, 6]
Output: 4

  const arr_1=[];
const arr_2=[];
function bigNumber_2(arr_1,arr_2){
arr_1=arr_1.concat(arr_2);
arr_1.sort((a,b)=>a-b);
return arr_1[arr_1.length-2]; 
}
---------------

3. Write down a function which will receive an array of numbers and remove duplicates from it (using Set)
Input: [1, 3, 5, 2, 5, 2, 6]
Output: [1, 3, 5, 2, 6]

Input: [1, 1, 1, 3]
Output: [1, 3]
  
function remDoubleNum(arr){
const del = [... new Set(arr)];
return del;
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
  
  
  function caesarShift(text, shift) {
	var result = "";
	for (var i = 0; i < text.length; i++) {
		var c = text.charCodeAt(i);
		if      (65 <= code && code <=  90) result += String.fromCharCode((code - 65 + shift) % 26 + 65);  
		else if (97 <= code && code <= 122) result += String.fromCharCode((code - 97 + shift) % 26 + 97);  
		else  result += text.charAt(i);  
	}
	return result;
}

2. Decode function
  Input: Olssv dvysk, 7
  Output: Hello world

  Input: bcd, 1
  Output: abc
  
---------------

5. Write down a function which will print the number of the rest seconds until the current day's end.
Example: if current time is 23:59:45 function should print 15
Example: if current time is 23:50:45 function should print 555


function GetWeekDays (y,m,d) {
     var date= new Date(y,m,d);
     var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturdy"];
     return days[date.getDay()];
 }
---------------

6. Write down a function which will print week day based on provided day.
Input: "2019/10/14"
Output: "Monday"

Input: "2014/09/12"
Output: "Friday"

function myFunction() {
    var d = new Date();
    let sum=Number;
    let k=d.getHours();
    if(k > 23) {
        return "Too late";
    }
    else {
     sum= (23-d.getHours())*3600 + (59-d.getMinutes())*60 +(60-d.getSeconds());   
}
return sum;
}
