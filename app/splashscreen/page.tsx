"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import "./splashscreen.css";

const SplashScreen = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(5);

  const text = "Portfolio";
  const name = "Santosh";

  useEffect(() => {
    if (timeLeft === 0) {
      router.push('/'); 
      return;
    }
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, router]);

  return (
    <div className="container">
      <div className="card">
        
        <div className="timer-badge">
          Skipping in {timeLeft}s
        </div>

        <div className="text-wrapper">
          {/* Main heading line */}
          <div className="text calligraphy-text">
            {[...text].map((letter, index) => (
              <span
                className="letter"
                key={index}
                style={{ animationDelay: `${index * 0.25}s` }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Subheading name line */}
          <div className="name calligraphy-text">
            {[...name].map((letter, index) => (
              <span
                className="letter"
                key={index}
                style={{ animationDelay: `${(index + text.length) * 0.25}s` }}
              >
                {letter}
              </span>
            ))}
          </div>

        
        </div>

      </div>
    </div>
  );
};

export default SplashScreen;