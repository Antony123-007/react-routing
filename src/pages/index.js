import React from "react";

export default function Index() {
  return (
    <div>
      <div class="index">
        <h1>Welcome to TuneHub</h1>

        <div class="form">
          <form action="login">
            <input type="submit" value="LOGIN" id="login"></input>
          </form>

          <br />

          <form action="registration">
            <input type="submit" value="REGISTER" id="register"></input>
          </form>
        </div>
      </div>
    </div>
  );
}
