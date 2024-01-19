import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="dropdown">
        <div className="dropbtn">
          EVENT<i class="ri-arrow-drop-down-fill"></i>
        </div>
        <div className="dropdown-content">
          <a href="#aboutjs">ABOUT</a>
          <a href="speakersjs">SPEAKERS</a>
          <a href="ticketsjs">TICKETS</a>
          <a href="/">FAQ</a>
        </div>
      </div>
      <div className="creatr">EVENT FULL</div>
        <button className="registrnow">GET YOUR TICKET
        </button>
      </div>
    
  );
}
