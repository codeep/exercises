1. Enter a number. Reverse its first and last digits. Print the new number.
Input: 13 
Output: 31

Input: 895796
Output: 695798
  function reversNumber(a){
    let arr = String(a).split("");
    for(let i = 0; i< arr.length/2; i++){
        let b = arr[i];
        arr[i]=arr[arr.length - 1 -i];
        arr[arr.length - 1 -i] = b;
    }
    return Number(arr.join(""));
}
---------------

2. Write down a function which will receive 2 arrays of numbers merge them and return second biggest element of merged array.

Input: [1, 3, 6, 8]; [2, 3, 6, 7]
Output: 7

Input [1, 4]; [3, 6]
Output: 4
  function twoArraySecondBiggest(arr1, arr2){
    var arr = [];
    arr = arr.concat(arr1, arr2);
    let max = arr.reduce((p,v)=>((p<v)?v:p))
    arr = arr.filter((v)=>(v<max));
    max = arr.reduce((p,v)=>((p<v)?v:p));
    return max;
}
---------------

3. Write down a function which will receive an array of numbers and remove duplicates from it (using Set)
Input: [1, 3, 5, 2, 5, 2, 6]
Output: [1, 3, 5, 2, 6]

Input: [1, 1, 1, 3]
Output: [1, 3]
  function removeDuplicates(arr){
    arr = new Set(arr);
    return arr;
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
function caesarCipherEncode(str, n){
    var a = [];
    for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i)>96 && str.charCodeAt(i)<123){
            if(str.charCodeAt(i) + n > 122){
                a += String.fromCharCode(str.charCodeAt(i) + n - 122 + 96);
            }else{
                a += String.fromCharCode(str.charCodeAt(i) + n);
            }
        }else if(str.charCodeAt(i)>64 && str.charCodeAt(i)<91){
            if(str.charCodeAt(i) + n > 90){
                a += String.fromCharCode(str.charCodeAt(i) + n - 90 + 64);
            }else{
                a += String.fromCharCode(str.charCodeAt(i) + n);
            }
        }else{
            a += str[i];
        }
    }
    return a;
}
2. Decode function
  Input: Olssv dvysk, 7
  Output: Hello world

  Input: bcd, 1
  Output: abc
  function caesarCipherDecode(str, n){
    var a = [];
    for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i)>96 && str.charCodeAt(i)<123){
            if(str.charCodeAt(i) - n < 97){
                a += String.fromCharCode(str.charCodeAt(i) - n + 122 - 96);
            }else{
                a += String.fromCharCode(str.charCodeAt(i) - n);
            }
        }else if(str.charCodeAt(i)>64 && str.charCodeAt(i)<91){
            if(str.charCodeAt(i) - n < 65){
                a += String.fromCharCode(str.charCodeAt(i) - n + 91 - 65);
            }else{
                a += String.fromCharCode(str.charCodeAt(i) - n);
            }
        }else{
            a += str[i];
        }
    }
    return a;
}function caesarCipherDecode(str, n){
    var a = [];
    for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i)>96 && str.charCodeAt(i)<123){
            if(str.charCodeAt(i) - n < 97){
                a += String.fromCharCode(str.charCodeAt(i) - n + 122 - 96);
            }else{
                a += String.fromCharCode(str.charCodeAt(i) - n);
            }
        }else if(str.charCodeAt(i)>64 && str.charCodeAt(i)<91){
            if(str.charCodeAt(i) - n < 65){
                a += String.fromCharCode(str.charCodeAt(i) - n + 91 - 65);
            }else{
                a += String.fromCharCode(str.charCodeAt(i) - n);
            }
        }else{
            a += str[i];
        }
    }
    return a;
}
---------------

5. Write down a function which will print the number of the rest seconds until the current day's end.
Example: if current time is 23:59:45 function should print 15
Example: if current time is 23:50:45 function should print 555
function secondsDayEnd(){
    var date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    h = (23 - h) * 3600;
    m = (59 - m) * 60;
    s = 60 - s;
    return h + m + s;
}
---------------

6. Write down a function which will print week day based on provided day.
Input: "2019/10/14"
Output: "Monday"

Input: "2014/09/12"
Output: "Friday"
function dateToDay(str){
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var arr = str.split('/');
    var date = new Date(arr[0],arr[1] - 1, arr[2]);
    return days[date.getDay()];    
}
