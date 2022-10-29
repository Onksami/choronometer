
// variables


const start = document.getElementById("start");
start.innerText = "Start";

const reset = document.getElementById("reset");
reset.innerText = "Reset";

const stop = document.getElementById("stop");
stop.innerText = "Stop";

const hour = document.getElementById("hour");
hour.innerText = 0; 

const minute = document.getElementById("minute");
minute.innerText = 0; 

const second = document.getElementById("second");
second.innerText = 0;







// Functions are starting 

let test;
let i =  0;
function init () {
    test = setInterval (lunch, 1000);

    function lunch () {
       
            
        
            i ++;
            second.innerText = i;
            if (i > 59) {
                i = 0;
                minute.innerText ++;
                if (minute.innerText > 59) {
                    minute.innerText = 0;
                    hour.innerText ++;
                }
            }
        

    }
}

start.onclick = function() {
    init();

  };


function pause (){
 clearInterval(test);
}

stop.onclick = function() {
    pause ()
};

function resetAll (){

clearInterval(test);
i = 0;
second.innerText = 0;
minute.innerText = 0;
hour.innerText = 0; 

}


reset.onclick = function  () {
    resetAll ()
};







// start.onclick = increaseTime();

// function increaseTime() {
//     setInterval (function () {second++}, 1000);
// }

// reset.click = resetT();

// resetTime (){
//     hour.innerText = "";
//     minute.innerText = "";
//     second.innerText =  "";
// }






// --------------------------------------------------------------------------------------------------


// let show = document.querySelector("p");

// let show1 = document.querySelector("h2");

// let basla = document.querySelector(".start");
// let durdur = document.querySelector(".stop");
// let reset = document.querySelector(".restart");

// let i = 0;
// let deneme;
// let saatg=0;
// let dakika=0;
// let saniye=0;
// function saat1() {
//   deneme = setInterval(saat, 1000);

//   function saat() {
//     i++;
//     saniye = i;
//     if (saniye >59){
//         i = 0;
//         saniye = 0;
//         dakika ++; 
//         if (dakika>59){
//           dakika=0;
//           saatg++;
//         }
//     }
    
//     show.textContent = saatg + " : " + dakika + " : " + saniye;
//   }
// }

// basla.onclick = function() {
//   saat1();
// };

// durdur.onclick = function() {
//   clearInterval(deneme);
// };

// reset.onclick = function (){
// clearInterval(deneme);
// saatg=0;
// dakika=0;
// saniye=0;
// i=0;
// show.textContent = saatg + " : " + dakika + " : " + saniye;
// };