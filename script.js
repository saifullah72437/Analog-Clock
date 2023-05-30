setInterval(() => {

    date = new Date();

    hTime = date.getHours();
    mTime = date.getMinutes();
    sTime = date.getSeconds();

    hRotation = 30 * hTime + mTime / 2;
    mRotation = 6 * mTime;
    sRotation = 6 * sTime;
    
    document.getElementById("hours").style.transform = `rotate(${hRotation}deg)`
    document.getElementById("minutes").style.transform = `rotate(${mRotation}deg)`
    document.getElementById("seconds").style.transform = `rotate(${sRotation}deg)`

    console.log(hTime, mTime, sTime)
    
}, 1000);