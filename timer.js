let count;
let clock = document.getElementById("timer");
(function(){
    let second = 0;
    timer = setInterval(()=>{
        clock.innerHTML = "" + second;
        second++;
    }, 1000)
})()