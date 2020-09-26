let s1 = "abcd"
let s2 = "0123"
max = Math.max(s1.length,s2.length)
console.log(max)
let merge2String=""
for(let i = 0 ; i < max ;i++){
   if(s1[i]===undefined){
    merge2String=merge2String+s2[i]
   }else if(s2[i]==undefined){
     merge2String=merge2String+s1[i]
        }else{
        merge2String=merge2String+s1[i]+s2[i]
        }
}
console.log(merge2String)