import React from "react";

import "./gaming.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      
      <form>
  <label  for="fname">Name</label><br/>
  <input type="text" id="fname" name="fname" value=""/><br/>
  <label for="lname">Email:</label><br/>
  <input type="text" id="lname" name="lname" value=""/> <br/>
  <label for="lname">Phone Number:</label> <br/>
  <input type="text" id="lname" name="lname" value=""/> <br/>
  <label for="lname">Message box:</label> <br/>
  <textarea  id="issue" name="issue" rows="3" text="text" cols="20"></textarea> <br/><br/>
</form>
<input type="submit" value="Submit" />


   </div>
  );
  }
export default Contact;
