import React from "react";
import Styles from "./footer.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className={Styles.main_footer}>
      <div className={Styles.top_container}>
        <h1 className={Styles.tophead}>
          Enhance your <br />
          digital business
        </h1>

        <div className={Styles.buttondown}>
          <span className={Styles.buttonletstalk}>
            <Link href="/">LET’S TALK </Link>
          </span>

          <span className={Styles.buttonletstalkor}>or</span>
          <span className={Styles.buttonletstalklink}>
            <Link href="/">info@rts.ae</Link>
          </span>
        </div>
        <br />
      </div>

      <div className={Styles.middle_container}>
        <h1>Head Office</h1>

        <div>
          <p>
            Ministries Complex, <br />
            Royal Group Building, 1st Floor
            <br />
            P.O.Box 112847, Abu Dhabi, UAE
            <br />
            Tel: <span>02-8111333</span> / <span> 02-8111345</span>
          </p>
        </div>

        <div className={Styles.linkiconcontainer}>
          <Link href="https://twitter.com/OrtmorAgency">
            <FaTwitter size="1em" />
          </Link>

          <Link href="https://linkedin.com/company/ortmoragency">
            <FaLinkedinIn size="1em" />
          </Link>

          <Link href="https://www.instagram.com/ortmoragency/">
            <FaInstagram size="1em" />
          </Link>

          <Link href="https://www.facebook.com/ortmoragency">
            <FaFacebookF size="1em" />
          </Link>

          <Link href="https://www.youtube.com/channel/UCaG0EPRgqcLT9nhXd6rhyxw">
            <FaYoutube size="1em" />
          </Link>
        </div>
      </div>

      <div className={Styles.last_container}>
        <h1>Quick Link</h1>
        <div className={Styles.linkcontainer}>
          <Link href="/">HOME</Link>
          <Link href="/">ABOUT</Link>
          <Link href="/">SOLUTIONS</Link>
          <Link href="/">SERVICES</Link>
          <Link href="/"> INSIGHTS</Link>
        </div>
        <p className={Styles.footercredit}>
          © 2023. All rights reserved @ Royal Technology Solutions
        </p>
      </div>
    </div>
  );
}

export default Footer;
