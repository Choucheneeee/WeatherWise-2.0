import React, { useState, useEffect } from "react";
import "./horloge.css"; // Assurez-vous d'avoir un fichier Horloge.css pour le style

function Horloge({ data }) {
  const [time, setTime] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date(new Date().getTime() + (data?.timezone || 0) * 1000 - 3600000));
    }, data); // Update every second

    return () => clearInterval(intervalId);
  }, [data]); // Re-run effect only when `data` changes

  const clockStyle = {
    color: "#fff",
    textAlign: "center",
    height: "30px",
  };

  const hours = time ? time.getHours() : null;
  const minutes = time ? time.getMinutes() : null;
  const seconds = time ? time.getSeconds() : null;

 

  const hourDeg = (hours + minutes / 60) * 30;
  const minuteDeg = (minutes + seconds / 60) * 6;
  const secondDeg = seconds * 6;

  const hourStyle = {
    transform: `rotate(${hourDeg}deg) translate(0px, -30px)`,
  };

  const minuteStyle = {
    transform: `rotate(${minuteDeg}deg) translate(0px, -38px)`,
  };

  const secondStyle = {
    transform: `rotate(${secondDeg}deg) translate(0px, -29px)`,
    backgroundColor: "red",
  };
  return (
    <div className="Horloge">
      <div className="clock digital" style={clockStyle}>
        {time ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',seconds: '2-digit', hour12: false }) : 'Loading...'}
      </div>
      <div className="analog-clock">
        <div className="clock-circle">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="clock-number"
              style={{
                transform: `rotate(${index * 30}deg) translate(0, -100px)`,
              }}
            >
              {index === 0 ? 12 : index}
            </div>
          ))}
        </div>
        <div className="hand hour-hand" style={hourStyle}></div>
        <div className="hand minute-hand" style={minuteStyle}></div>
        <div className="hand second-hand" style={secondStyle}></div>
      </div>
    </div>
  );
}

export default Horloge;
