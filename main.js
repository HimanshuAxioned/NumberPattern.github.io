console.log('hello world')



function pattern(n){

  var a="";
  for(let i=1; i<=n; i++){
    for (let space = 1; space <= n - i; space++) {
      a+=" ";
    }
    let c=1;
    a+=c
    for(let j=1; j<i; j++){
      c= (c*(i-j))/j;
      
        a+=(" "+c);
      // if(i== 0 || j==0){
        
      //   a+=c;
      // }
      // else{
      //   c= (c*(i-j))/j;
      //   console.log(c, i,j)
      //   a+=(" "+c);
      // }
      
      
    }
    a+="\n";
  }
  console.log(a+"\n")
}
pattern(4)




