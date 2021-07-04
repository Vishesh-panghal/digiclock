let digiclock =()=>{
    let date = new Date();
    let hours = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let amorpm = hours>=12? 'Pm':'Am';
    if (hours> 12) {
        hours = hours-12
    }
    document.getElementById("hours").innerHTML=hours
    document.getElementById("minutes").innerHTML=min
    document.getElementById("second").innerHTML=sec
    document.getElementById("ampm").innerHTML=amorpm

    setTimeout(digiclock,1);
}
digiclock();