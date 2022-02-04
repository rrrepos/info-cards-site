function addSwipeEvent(theDom, eventName, handleEvent) {
    var eStart=0, eEnd=0;

    theDom.addEventListener('touchstart', function(e){
        switch (eventName) {
            case "swipeDown" | "swipeUp":
                eStart = e.targetTouches[0].clientY;
                break;
            case "swipeLeft" | "swipeRight":
                eStart = e.targetTouches[0].clientX;
                break;
            default:
                eStart = e.targetTouches[0].clientY;
                break;
        }
    }, false);

    theDom.addEventListener('mousedown', function(e){
        switch (eventName) {
            case "swipeDown" | "swipeUp":
                eStart = e.clientY;
                break;
            case "swipeLeft" | "swipeRight":
                eStart = e.clientX;
                break;
            default:
                eStart = e.clientY;
                break;
        }
    }, false);

    theDom.addEventListener('touchmove', function(e){
        e.preventDefault();
    }, false)

    theDom.addEventListener('mousemove', function(e){
        e.preventDefault();
    }, false)

    theDom.addEventListener('touchend', function(e){

        switch (eventName) {
            case "swipeDown" | "swipeUp":
                eEnd = e.changedTouches[0].clientY;
                break;
            case "swipeLeft" | "swipeRight":
                eEnd = e.changedTouches[0].clientX;
                break;
            default:
                eEnd = e.changedTouches[0].clientY;
                break;
        }

        var moveVal = eEnd-eStart;
        var moveAbsVal = Math.abs(moveVal);

        // swipeUp
        if (moveVal<0 && moveAbsVal>30 && eventName=="swipeUp") {
            // console.log("swipeUp");
            handleEvent(e);
        }

        // swipeDown
        if (moveVal>0 && moveAbsVal>30 && eventName=="swipeDown") {
            // console.log("swipeDown");
            handleEvent(e);
        }

        // swipeLeft
        if (moveVal<0 && moveAbsVal>30 && eventName=="swipeLeft") {
            // console.log("swipeLeft");
            handleEvent();
        }

        // swipeRight
        if (moveVal>0 && moveAbsVal>30 && eventName=="swipeRight") {
            // console.log("swipeRight");
            handleEvent();
        }

    }, false);

    theDom.addEventListener('mouseup', function(e){

        switch (eventName) {
            case "swipeDown" | "swipeUp":
                eEnd = e.clientY;
                break;
            case "swipeLeft" | "swipeRight":
                eEnd = e.clientX;
                break;
            default:
                eEnd = e.clientY;
                break;
        }

        var moveVal = eEnd-eStart;
        var moveAbsVal = Math.abs(moveVal);

        // swipeUp
        if (moveVal<0 && moveAbsVal>30 && eventName=="swipeUp") {
            // console.log("swipeUp");
            handleEvent(e);
        }

        // swipeDown
        if (moveVal>0 && moveAbsVal>30 && eventName=="swipeDown") {
            // console.log("swipeDown");
            handleEvent(e);
        }

        // swipeLeft
        if (moveVal<0 && moveAbsVal>30 && eventName=="swipeLeft") {
            // console.log("swipeLeft");
            handleEvent(e);
        }

        // swipeRight
        if (moveVal>0 && moveAbsVal>30 && eventName=="swipeRight") {
            // console.log("swipeRight");
            handleEvent(e);
        }

    }, false);
}
