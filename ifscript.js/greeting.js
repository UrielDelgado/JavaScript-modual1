let currentHour = 1659;



// if  currenthour <= 10
// else if currenthour >= 10:1
//else currenthour >= 5 
// Get the current hour using the Date object

//let currentHour = new Date().getHours();
if(currentHour < 1000) {
    console.log(`Good morning! its currently ${currentHour} in the morning!`);
}
    
else if (currentHour < 1700 ){
    console.log(`Have a good day so far`);
}
else{
    console.log(` see you tommorrow `);
}