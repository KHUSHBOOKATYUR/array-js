a=[5,4,6,8]
i=0
b=[]
c=[]
while (i<a.length){
    if (a[i]%2==0){
        b.push(a[i])
        i++
    }

    else{
        c.push(a[i])
        i++
    }
}
console.log(b)
console.log(c)