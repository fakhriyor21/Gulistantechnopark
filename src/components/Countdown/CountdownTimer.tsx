import React, { useState, useEffect } from "react";
import inno from "../../assets/video/inno.mp4";
interface CountdownProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    kun: 0,
    soat: 0,
    daqiqa: 0,
    soniya: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          kun: Math.floor(difference / (1000 * 60 * 60 * 24)),
          soat: Math.floor((difference / (1000 * 60 * 60)) % 24),
          daqiqa: Math.floor((difference / (1000 * 60)) % 60),
          soniya: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ kun: 0, soat: 0, daqiqa: 0, soniya: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative w-full h-96  flex gap-9 flex-col items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover "
      >
        <source src={inno} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex items-start justify-center w-full gap-1.5 count-down-main ">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="timer">
            <div className="rounded-xl bg-black/25 backdrop-blur-sm py-8 min-w-[180px] flex items-center justify-center flex-col gap-1 px-3">
              <h3 className="countdown-element font-manrope font-semibold text-5xl text-white text-center">
                {value}
              </h3>
              <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
                {unit}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
