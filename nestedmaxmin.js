// var array = [[5,90,9,90], [3, 12], [5, 90, 0]];
// var max=array[0]
// var min=array[0]
// for (var i=0;i<=array.length+1;i++){
//     if(array[i]>max){
//         max=array[i]
//     }
//     if(array[i]<min){
//         min=array[i]
//     }
// }
// console.log(max);
// console.log(min);





// a=[12,67,98,34]
// i=0
// c=[]
// for (var i=0,i<a.lenght){
//     sum=0
//     for(a[i]>0){
//         sum=sum+(a[i]%10)
//         Math.floor(a[i])=10
//     }c.push(sum)
//     i=i+1
// }
// console.log(c)


const arr = [[12,45,75,90], [54,45,20],[23,54,75,2]];
const max = Math.max(...[].concat(...arr));
const min = Math.min(...[].concat(...arr));
console.log(max);
console.log(min);


