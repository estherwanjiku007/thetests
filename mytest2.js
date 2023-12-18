function speedDetector(){
let speed=120
const speedLimit=70;
let diff=(speed-speedLimit)/5;
if (speed<=speedLimit){
    console.log( "OK");
}
else if(speed>speedLimit){
     console.log(diff);
}
else if (diff>=12){
    console.log("License Suspended.");
}
}
speedDetector()