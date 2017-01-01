function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
    document.addEventListener("deviceready", deviceInfo, true);
    //setInterval(function(){ alert("Hello, Jay"); }, 3000);
}

function msg()
{
       setInterval(function(){ alert("Hello"); }, 3000);
}
