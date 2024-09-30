import React, {useState, useEffect} from 'react';

function DigitalClock(){

    const [time, setTime] = useState(new Date()); // We assign the state to new Date.

    useEffect(() => {
       const intervalId = setInterval(() => {
        setTime(new Date());
       }, 1000); // Update new Date every second. We store setInterval in intervalId so that we can clean it afterwards.
            
        return () => {
            clearInterval(intervalId); // Clean up the intervalId when we unmount.
        }
    }, []); // Empty [] because we only want to start our set interval when we mount and that's it.


    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12; // If hours are more than twelve it gives us the remainder. if it is 0 (falsy value) it returns 12.

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    function padZero(number){ // We create a function that takes a number (the time that we formated before). If it is less than then it concatenates a "0" before it and returns it.
                              // The numbers will get added to the 0 and become strings, which doesn't matter for hour clock.
        return (number < 10 ? "0" : "") + number;
    }
        return(
            <div className='clock-container'>
                <h1>Digital Clock</h1>
                <div className='clock'>
                    <span>{formatTime()}</span>
                </div>
            </div>
        )
}

export default DigitalClock;