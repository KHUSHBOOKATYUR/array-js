function getcharcodes(s){
    var array=[];
    for(i=0;i<=s.length-1;i++){
        var code=s.charCodeAt(i)
        array.push(code)
    }
    return array;
}
console.log(getcharcodes("Khushbu"));