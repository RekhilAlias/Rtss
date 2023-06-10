import React from "react";
import Styles from "./footer.module.scss";

const Subscribe = () => {
  return (
    <div className={Styles.subscribemaincontainer}>
      <div className={Styles.subscribeparent}>
        <div className={Styles.subchildone}>
          <h1>Don't miss </h1>
          <h1>our hottest news!</h1>
          <p>
            Enter your email to receive round-up of most
            <br /> hottest news
          </p>
        </div>

        <div className={Styles.subchildtwo}>
          <input
            id={Styles.inputbutton1}
            type="email"
            placeholder="Your email goes here"
            required
          />
          <input id={Styles.inputbutton2} type="submit" value="Subscribe" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
