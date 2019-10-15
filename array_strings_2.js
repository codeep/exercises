1. Enter a number.Reverse its first and last digits.Print the new number.
Input: 13
Output: 31

Input: 895796
Output: 695798

function reverseDigits(num) {
    let number = num.toString();
    number = number.split("");
    let firstdigit = number[0];
    let lastdigit = number[number.length - 1];
    number[0] = lastdigit;
    number[number.length - 1] = firstdigit;
    number = number.join("");
    return +number;

}
-- -- -- -- -- -- -- -


2. Write down a

function which will receive 2 arrays of numbers merge them and
return second biggest element of merged array.

Input: [1, 3, 6, 8];
[2, 3, 6, 7]
Output: 7

Input[1, 4];
[3, 6]
Output: 4

function secondBiggest(arr1, arr2) {
    let newarr = arr1.concat(arr2);
    newarr.sort();
    return newarr[newarr.length - 2];

}
-- -- -- -- -- -- -- -


3. Write down a

function which will receive an array of numbers and remove duplicates from it(using Set)
Input: [1, 3, 5, 2, 5, 2, 6]
Output: [1, 3, 5, 2, 6]

Input: [1, 1, 1, 3]
Output: [1, 3]

function removeDuplicates(array) {
    let set = new Set(array);
    let newarr = [];
    for (let value of set) {
        newarr.push(value)
    }
    return newarr;
}
-- -- -- -- -- -- -- -


4. Create an implementation of the rotational cipher, also sometimes called the Caesar cipher.
The Caesar cipher is a simple shift cipher that relies on transposing all the letters in the alphabet using an
integer key between 0 and 26. Using a key of 0 or 26 will always yield the same output due to modular arithmetic.
The letter is shifted
for as many values as the value of the key.

1. Encode

function
Input: abc, 1
Output: bcd

Input: Hello world, 7
Output Olssv dvysk

function encodeCipher(string, num) {
    let arr = string.split(" ");
    let temp = [];

    for (let j = 0; j < arr.length; j++) {
        let element = arr[j];
        temp[j] = [""]
        for (let i = 0; i < element.length; i++) {
            let digit = element.charCodeAt(i);
            if (digit >= 65 && digit <= 90) {
                digit += num;
                if (digit > 90) {
                    digit = digit - 90 + 64;
                } else {
                    temp[j] += String.fromCharCode(digit);
                }
            }
            digit += num;
            if (digit > 122) {
                digit = digit - 122 + 96;
                temp[j] += String.fromCharCode(digit);
            } else {
                temp[j] += String.fromCharCode(digit);

            }
        }
    }
    return temp.join(" ");
}

2. Decode

function
Input: Olssv dvysk, 7
Output: Hello world

Input: bcd, 1
Output: abc

function decodeCipher(string, num) {
    let arr = string.split(" ");
    let temp = [];

    for (let j = 0; j < arr.length; j++) {
        let element = arr[j];
        temp[j] = [""]
        for (let i = 0; i < element.length; i++) {
            let digit = element.charCodeAt(i);
            if (digit >= 65 && digit <= 90) {
                digit -= num;
                if (digit < 65) {
                    digit = 90 - (65 - digit);
                } else {
                    temp[j] += String.fromCharCode(digit);
                }
            } else {
                digit -= num;
                if (digit < 97) {
                    digit = 122 - (97 - digit) + 1;
                    temp[j] += String.fromCharCode(digit);
                } else {
                    temp[j] += String.fromCharCode(digit);

                }
            }
        }
    }
    return temp.join(" ");
}
-- -- -- -- -- -- -- -

5. Write down a

function which will print the number of the rest seconds until the current day 's end.
Example: if current time is 23: 59: 45

function should print 15
Example: if current time is 23: 50: 45

function should print 555


function numberOfSeconds() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let sec = today.getSeconds();
    return (23 - hour) * 3600 + (59 - minute) * 60 + (60 - sec);
}
-- -- -- -- -- -- -- -


6. Write down a

function which will print week day based on provided day.
Input: "2019/10/14"
Output: "Monday"

Input: "2014/09/12"
Output: "Friday"

function weekDay(year, month, day) {
    let date = new Date(year, month - 1, day)
    let wd = date.getDay();
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekday[wd];
}