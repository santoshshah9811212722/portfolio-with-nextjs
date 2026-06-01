'use client'
import React, { useState,useRef} from 'react'
// import menu_open_icon from '../../public/assets/menu_open_icon.png'
// import menu_close_icon from '../../public/assets/close_icon.png'
// import AnchorLink from 'react-anchor-link-smooth-scroll';

import '../navbar/navbar.css'
import Image from 'next/image';
export default function Navbar() {
  const [menu,setMenu]=useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
//  const menuRef=useRef();
 const menuRef = useRef<HTMLUListElement | null>(null);
 
 const openMenu=()=>{
  // menuRef.current.style.right="0";
  // document.body.style.overflow = "hidden";
  // menuRef.current.classList.add("open");
  // document.body.style.overflow = "hidden";
  
  setMenuOpen(true);
  document.body.style.overflow = "hidden";

 }
//  

const closeMenu = () => {
  setMenuOpen(false);
  document.body.style.overflow = "auto";
}
 
  return (
    <div className='navbar'>
     {/* <h1 className='logo'>Sa</h1> */}
     <Image src='/navbar/menu_open_icon.png' onClick={openMenu} alt="" className='nav-mob-open' width={30} height={30}/>
     <ul ref={menuRef} className={`nav-menu ${menuOpen?"open":""}`}>
      <Image src='/navbar/close_icon.png' onClick={closeMenu} alt=""  className='nav-mob-close' width={30} height={30}/>
        <li><a className='anchor-link'  href='#home'><p onClick={()=>{setMenu("home"); closeMenu();}}>Home</p></a>{menu==="home"?<span className='underline'></span>:<></>}</li>
        <li><a className='anchor-link'  href='#about'><p onClick={()=>{setMenu("about"); closeMenu();}}>About Me</p></a>{menu==="about"?<span className='underline'></span>:<></>}</li>
        <li><a className='anchor-link'  href='#services'><p onClick={()=>{setMenu("services"); closeMenu();}}>Services</p></a>{menu==="services"?<span className='underline'></span>:<></>}</li>
        <li><a className='anchor-link'  href='#work'><p onClick={()=>{setMenu("work"); closeMenu();}}>Portfolio</p></a>{menu==="work"?<span className='underline'></span>:<></>}</li>
        <li><a className='anchor-link'  href='#contact'><p onClick={()=>{setMenu("contact"); closeMenu();}}>Contact</p></a>{menu==="contact"?<span className='underline'></span>:<></>}</li>
     </ul>
     <div className="nav-connect"><a className='anchor-link'  href='#contact'>Connect With Me</a></div>
    </div>
  )
}


