i=0
a=[]
sum=0
while (i<10){
    var p=require("readline-sync")
    var num=p.questionInt("enter the number-:")
    a.push(num)
    sum=sum+a[i]
    i=i+1
}
console.log(a)
console.log(sum) 