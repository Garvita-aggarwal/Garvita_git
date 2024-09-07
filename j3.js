function checkNumbers(){
    for (let i =0;i<=5;i++){
        if(i %2 === 0){
            console.log(`The number ${i} is even.`);
        }else{
            console.log(`The number ${i} is odd.`);  
        }
    }
   }
   checkNumbers();