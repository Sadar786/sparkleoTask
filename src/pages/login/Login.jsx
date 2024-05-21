import React from "react";
import "./login.css";
import bus from './bus.png'

export default function Login() {
  return (
    <div className="loginPage">
      {/* {page Left} */}
      <div className="page1">
        <div className="content">
          <div className="header">
            <span className="header-text">Sign In</span>
            <span className="header-dec">
              Enter your email and password to sign in!
            </span>
          </div>

          <div className="saparater">
            ........................................or.......................................
          </div>
          <form action="" className="form">
            <div className="formData">
              <div className="email">
                <lebal className="lebal">Email</lebal>
                <input type="text" placeholder="Your email" name="" id="" />
              </div>

              <div className="password">
                <lebal className="lebal">password</lebal>
                <input
                  type="password"
                  placeholder="********"
                  Your
                  password
                  name=""
                  id=""
                />
              </div>
              <div className="forget_check">
                <div className="check">
                  <input className="chBox" type="checkbox" id="subscribe" name="subscribe" />
                  <span className="loged">keep me loged in</span>
                </div>
                <div className="forget">forget Password</div>

              </div>
                <div className="button">Sign in</div>
                <div className="notreg">
                Not registered yet? <span className="cre">Create an Account</span>
                </div>
            </div>
          </form>
        <div className="footerP1">
            <span>© 2023 Spark Drive. All Rights Reserved. </span>
        </div>
        </div>
      </div>



      {/* page Right */}
      <div className="page2">
         <div className="part1">
            <div>
            <img className="img" src={bus} alt="" />
            </div>
            <div className="spark"><span className="spark-text">Spark</span></div>
        </div>

        <div className="part2">
            <div className="uper"> <span>Learn more about Air Drive on</span></div>
            <div className="down">Spark.pl</div>
        </div>
        <div className="footerP2">
            <span>License </span>
            <span>Terms of Use </span>
            <span>Blog </span>
        </div>
      </div>
    </div>
  );
}
