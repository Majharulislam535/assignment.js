                               
                               
                               /** KilometerToMeter */
     /** 
function kilometerToMeter(kilometer){
     const meter = kilometer*1000;
     return meter;
}
const result = kilometerToMeter(2);
console.log(result);
                              */

                            /** budgetCalculator */
              /** 
  function budgetCalculator(watch,mobilePhone,laptop){
      const total = watch*50;
      const total2= mobilePhone *100;
      const total3=laptop*500;
      return total + total2 + total3;
  }
  const result = budgetCalculator(1,1,1);
  console.log(result);
       */

                           /**hotelCost */
               /*
   function hotelCost(days){
       let totalDay=0;
       if(days <= 10){
           totalDays = days *100;
       }
       else if(days <=20 ){
           const firstPart = 10*100;
           const secondPart = days -10;
           const thirdPart = secondPart * 80 ;
           totalDays = firstPart + thirdPart;
       }
       else{
           const firstPart =10*100;
           const secondPart = 10*80;
           const thirdPart = days -20;
           const lastPart = thirdPart *50;
           totalDays = firstPart + secondPart +lastPart;
       }
       return totalDays;
   } 

   const result = hotelCost(25);
   console.log(result);

   */


                                         /** megaFriend */
        
    function megaFriend(friendsName){
        let heightName = " ";
        for(let i=0;i<friendsName.length;i++){
            const element = friendsName [i];
             if(element>heightName){
                 heightName = element;
             }
        }
        return heightName;
    }
    const result = megaFriend(['mahadi','hasan','majharul','islam','hasan','majharulislam']);
    console.log(result);

       