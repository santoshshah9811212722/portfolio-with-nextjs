'use client'

// import theme from "../../public/assets/theme.jpg";
// import logo from "../../public/assets/profile.jpg";
import "./About.css";
import Image from "next/image";
function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>
          About
          <Image
            src='/about/theme.jpg'
            alt="logo"
            width={80}
            height={80}
            // style={{ width: "8%", height: "8%", marginLeft: "15px" }}
          />
        </h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <Image src='/about/profile.jpg' alt="logo" width={300} height={300} style={{borderRadius:"10px"}}/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am experienced frontend developer with over a decade of
              professional expertise in the field. throughtout my career,I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p> <hr  className="html-css" /></div>
                <div className="about-skill"> <p>React JS</p> <hr className="reactjs" /></div>
                <div className="about-skill"><p>JavaScript</p> <hr className="javascript"  /></div>
                <div className="about-skill"><p>Next JS</p> <hr className="Nextjs" /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="achievement">
          <h1>1+</h1>
          <p className="p">YEARS OF EXPRIENCE</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>2+</h1>
          <p className="p">PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>2+</h1>
          <p className="p">HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default About;
