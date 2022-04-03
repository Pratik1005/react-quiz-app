import {useState, useEffect} from "react";

const useTimer = () => {
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      function handleCountDown() {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
          } else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        }
      }
      let intervalId = setInterval(handleCountDown, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }, [minutes, seconds]);

    return {minutes, seconds}
}

export {useTimer};