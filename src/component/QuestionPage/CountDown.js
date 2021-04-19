import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function CountDown(){

    const [time, setTimeOut] = useState(60);
    const history = useHistory();
     // eslint-disable-next-line
    function countDown(){
        if (time < 1) {
          setTimeOut(`Hết giờ!`);
          if (time === 0) {
            history.push("/result");
            clearInterval(countDown);
          }
        }
        setTimeOut(time - 1);
      }
    
      useEffect(() => {
        const intervalID = setInterval(countDown, 1000);
        return () => clearInterval(intervalID);
        
      }, [time, countDown]);
    return(
    <h2>{time}</h2>
    );
}