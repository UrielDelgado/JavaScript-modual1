"use strict";
 let payRate = 17.30;
 let hoursWorked = 45;
 let extrahours = hoursWorked - 40;
 let extrahoursrate = payRate*1.5;
 let regulartotalpay ;
 let extraHourspay = extrahoursrate*extrahours;
 let grosspay = regulartotalpay + extraHourspay;
 if( hoursWorked > 40){
    regulartotalpay = payRate*40
    grosspay = regulartotalpay + extraHourspay
    console.log(`You worked over 40 hour this week paycke comes out to ${grosspay}`)
 }
 else if( hoursWorked<= 40){
    regulartotalpay = payRate*hoursWorked
    console.log(`here is your regular paycheck of ${regulartotalpay}`)

 }

 //tax variables 
 let annualAmount = grosspay * 52;
 let fileingstatus = "Married"
let taxeRate = null
let taxWithheld = null
let Netpay = null

 if(fileingstatus == `Single` ){
    console.log(` Your single your annoulamount is ${annualAmount}`)
    if(annualAmount < 12000){
        console.log(` Your tax rate is .5 `)
        taxeRate = .05
    }
    else if(annualAmount < 25000){
        console.log(` Your tax rate is .1 `)
        taxeRate = .1
    }
    else if( annualAmount < 75000){
        console.log(` Your tax rate is .15 `)
        taxeRate = .15
    }
     else{
        console.log(`Your tax rate is .2`)
        taxeRate = .2
     }
 
    }
else if (fileingstatus == `Married`){
    console.log(` Your Married your annoulamount is ${annualAmount}`)
    if(annualAmount < 12000){
        console.log(` Your tax rate is 0 `)
        taxeRate = 0
    }
    else if(annualAmount < 25000){
        console.log(` Your tax rate is .6 `)
        taxeRate = .6
    }
    else if( annualAmount < 75000){
        console.log(` Your tax rate is .11 `)
        taxeRate = .11
    }
     else{
        console.log(`Your tax rate is .2`)
        taxeRate = .2
     }
}
 taxWithheld = grosspay * taxeRate
 taxWithheld = Number(taxWithheld.toFixed(2))
 Netpay = grosspay - taxWithheld
 console.log(` your taxes with head is ${taxWithheld}.`)
 console.log(`Your net pay is ${Netpay}. `)

