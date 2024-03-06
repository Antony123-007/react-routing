import React from "react";
export default function Registration() {
  return (
    <div>
      <h2>Registration Form</h2>

      <form action="register" method="post">
        <label>Username:</label>
        <input type="text" name="username"></input>
        <br />
        <br />

        <label>Email:</label>
        <input type="email" name="email"></input>
        <br />
        <br />

        <label>Password:</label>
        <input type="password" name="password"></input>
        <br />
        <br />

        <label>Gender: </label>
        <input type="radio" name="gender" value="male"></input>
        <label>Male</label>
        <input type="radio" name="gender" value="female"></input>
        <label>Female</label>
        <input type="radio" name="gender" value="other"></input>
        <label>Others</label>
        <br />
        <br />

        <label>Role: </label>
        <input type="radio" name="role" value="admin"></input>
        <label>Admin</label>
        <input type="radio" name="role" value="customer"></input>
        <label>Customer</label>
        <br />
        <br />

        <label>Address</label>
        <textarea name="address"></textarea>
        <br />
        <br />

        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}
