"use client";

import React, { useState, useEffect } from "react";
import "./Hero.css";
import Image from "next/image";

export default function Hero() {
  const text = "I'm Santosh Shah Sonar";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(text.substring(0, displayText.length + 1));

          if (displayText === text) {
            setTimeout(() => setIsDeleting(true), 2000); // wait before deleting
          }
        } else {
          setDisplayText(text.substring(0, displayText.length - 1));

          if (displayText === "") {
            setIsDeleting(false);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text]);

  return (
    <div id="home" className="hero">
      <div className="profile-container">
  <Image
    src="/hero/profile.jpg"
    alt="Profile"
    width={305}
    height={205}
    className="profile-img"
  />
</div>
      <h1>
        <span className="typewriter">{displayText}</span>
        <br />
        Frontend Developer based in Nepal.
      </h1>

      <p>
        I am a frontend developer from Rautahat, Nepal with 1 year of
        experience in multiple areas like college projects and Vovour
        Technology.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <a className="anchor-link" href="#contact">
            Connect with me
          </a>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
  test
}

