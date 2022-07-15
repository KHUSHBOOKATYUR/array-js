var array = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max=array[0]
for (var i=0;i<=array.length-1;i++){
    if(array[i]>max){
        max=array[i]
    }
}
console.log(max);
