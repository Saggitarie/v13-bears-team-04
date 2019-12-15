import React, { useState } from "react";
import Button from "../Button";
import Input from "./input";
import AuthFormRedditIcon from "./authformredditicon";

export default function ForgotUsername() {
  return (
    <div className="form__wrapper">
      <AuthFormRedditIcon cx="form__wrapper__icon" />
      <h2>Recover your username</h2>
      <p className="sub-description">
        Don't worry! You may have forgotten your username, but we can help you
        out. Enter your email address below and we'll email you your username.
      </p>
      <Input>Email</Input>
      <Button
        text="Email Me"
        handleClick={() => console.log("emailed you")}
        cx="form__wrapper__button"
      />
      <div className="form__wrapper__info u-margin-top-medium">
        <p>
          If you are having trouble accessing your account, follow this{" "}
          <span>link</span>.
        </p>
        <p>
          <span className="form__wrapper__info--capitalized">
            Log in &nbsp;&middot;&nbsp;
          </span>
          <span className="form__wrapper__info--capitalized">Sign up</span>
        </p>
      </div>
    </div>
  );
}
