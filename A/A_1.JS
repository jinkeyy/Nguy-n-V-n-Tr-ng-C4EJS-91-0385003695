let n = 0
while( n < 4 || n>20){
   n = prompt("Nhập n số nguyên từ 4 đến 20")
   break;
}
console.log(n)
function findOppositeNumber(n,inputNumber){
    if(inputNumber>n/2){
        console.log(inputNumber-n/2)
    }else{
        console.log(inputNumber+n/2)
    }
}
findOppositeNumber(n,1)