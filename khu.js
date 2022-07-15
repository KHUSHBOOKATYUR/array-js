// const a=[1,2,3,4,5]
// const b=[6,7,8,9,10]
// const c=a.concat(b)
// console.log(c)

// var a = true + true + true * 3;
// console.log(a)



// function reverseString(str) {
//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// // take input from the user
// const string = ('Enter a string: ');
// const result = reverseString(string);
// console.log(result);


// let string = "khushbu"
// string = [...string].reverse().join("");
// console.log(string);


// function reverse(str) {
//     if (str === '')
//       return '';
//     else
//       return reverse(str.substring(1)) + str.charAt(0);
//   }
// const c=reverse("khushbu")
// console.log(c)
  

// let rev = 0;
// let num = 123456;
// let k;
// while(num != 0){
// 	k = num % 10;
//   rev = rev * 10 + k;
//   num = Math.floor(num/10);
// }
// console.log(rev);


// let rev = 0;
// let num = 123456;
// rev = Number(String(num).split('').reverse().join(''));
// console.log(rev);


// function getMinX(arr) {
//     let x = 1;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         x = x - arr[i];
//         if (x < 1) x = 1;
//     }
//     return x;
// }
// let arr = [-2, 3, 1, -5];
// console.log(getMinX(arr)); 



// var counts = [0,2,3,4,5]
//   goal = 5;
// var closest = counts.reduce(function(prev, curr) {
//   return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
// });
// console.log(closest)



// function minMax(array) {
//     var min = array[0],
//         max = array[0],
//         sum = array[0],
//         i, v;
//     for (i = 1; i < array.length; i++) {
//         v = array[i];
//         sum += v;
//         if (v > max) max = v;
//         if (v < min) min = v;
//     }
//     console.log(sum - min, sum - max);
// }minMax([1, 2, 3, 4, 5]);




// function miniMax(arr) {
//     var khuSum = 0
//     let max = 0
//     for (var i = 0; i < arr.length; i++) {
//         khuSum += arr[i]
//         max = khuSum - arr[i]
//     }
//     let min = khuSum - arr[0]
//     return max + ' ' + min
// }
// console.log(miniMax([1,2,3,4,5]))

