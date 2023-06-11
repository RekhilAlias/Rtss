"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
function Nav() {
  const [Navbackground, setNavbackground] = useState(false);
  const [Navtoggle, setNavtoggle] = useState("nav-links1");
  const [display1, setdisplay1] = useState(true);
  const [display2, setdisplay2] = useState(true);

  const Adding = () => {
    setNavtoggle("nav-links1");
    setdisplay1(true);
    setdisplay2(false);
  };

  const Removing = () => {
    setNavtoggle("nav-links2");
    setdisplay1(false);
    setdisplay2(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const changeNavbackground = () => {
        if (window.scrollY >= 80) {
          setNavbackground(true);
        } else {
          setNavbackground(false);
        }
      };
      window.addEventListener("scroll", changeNavbackground);
    }
  }, []);

  return (
    <nav className={Navbackground ? "navcolor" : "navbar"}>
      <div className="wrapper" id={Navbackground ? "line" : "line1"}>
        <div className={Navbackground ? "logo1" : "logo"}>
          <Link href="/">
            <img
              src={Navbackground ? "/logo.png" : "/logo.png"}
              alt="logo.png"
            />
          </Link>
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className={Navtoggle}>
          <label htmlFor="close-btn" className="btn close-btn">
            {display1 ? (
              <i onClick={Removing} className="fas fa-times"></i>
            ) : (
              ""
            )}
          </label>
          <li>
            <Link className="link-show-grad" onClick={Removing} href="/">
              ABOUT US
            </Link>
          </li>

          <li>
            <Link href="#" className="desktop-item link-show-grad">
              SOLUTIONS <i className="fas fa-caret-down"></i>
            </Link>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item link-show-grad">
              SOLUTIONS <i className="fas fa-caret-down"></i>
            </label>

            <div className="mega-box">
              <div
                className={Navbackground ? "content" : "content  margin-box1"}
              >
                <div className="row">
                  <ul className="mega-links">
                    <li>
                      <Link onClick={Removing} href="/">
                        ICT SOLUTIONS
                      </Link>
                    </li>

                    <li>
                      <Link onClick={Removing} href="/">
                        DIGITAL TRANSFORMATION
                      </Link>
                    </li>

                    <li>
                      <Link onClick={Removing} href="/">
                        ELV SOLUTIONS
                      </Link>
                    </li>

                    <li>
                      <Link onClick={Removing} href="/">
                        AUDION VISUAL SOLUTIONS
                      </Link>
                    </li>

                    <li>
                      <Link onClick={Removing} href="/">
                        DATA CENTRE SOLUTIONS
                      </Link>
                    </li>

                    <li>
                      <Link onClick={Removing} href="/">
                        EPC TURNKEY PROJECTS
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li>
            <Link className="link-show-grad" onClick={Removing} href="/">
              SERVICES & SUPPORT
            </Link>
          </li>

          <li>
            <Link className="link-show-grad" onClick={Removing} href="/">
              INSIGHTS
            </Link>
          </li>

          <li>
            <Link className="link-show-grad" onClick={Removing} href="/">
              CAREERS
            </Link>
          </li>

          <li>
            <Link className="link-show-grad" onClick={Removing} href="/">
              CONTACT
            </Link>
          </li>
        </ul>

        <label htmlFor="menu-btn" className="btn menu-btn">
          {display2 ? <i onClick={Adding} className="fas fa-bars"></i> : ""}
        </label>
      </div>
    </nav>
  );
}

export default Nav;
