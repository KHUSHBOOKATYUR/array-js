for (var i=2;i<=100;i++){
    for(var n=2;n<i;n++){
        if(i%n===0){
            break;
        }
    }
    if(i===n){
        console.log(n);
    }
}
