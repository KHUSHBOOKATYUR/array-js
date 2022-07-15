let numbers = [4, -4, 10, 203, 53, 11];
i=0
a=[]
b=[]
while (i<numbers.length){
    if (numbers[i]%2==0){
        // console.log(numbers[i],"even no")
        a.push(numbers[i])
    }
    else{
        // console.log(numbers[i],"odd no")
        b.push(numbers[i])
    }
    i++
}
console.log(b+a)