setInterval(()=>{
    d=new Date();
    hours=d.getHours();
    min=d.getMinutes();
    sec=d.getSeconds();
    hro=30*hours+min/2;
    minro=6*min;
    secro=6*sec;
    document.getElementById("hours").style.transform=`rotate(${hro}deg)`;
    document.getElementById("minute").style.transform=`rotate(${minro}deg)`;
    document.getElementById("hours").style.transform=`rotate(${secro}deg)`;

},1000);

