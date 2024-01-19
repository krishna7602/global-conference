import React from "react";
import backgroundphoto from './background.jpg'

export default function Home() {
  return (
    <>
    <div className="homejs">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="animate-charcter">Global Innovation Conference</h3>
          </div>
        </div>
      </div>
      <div className="brain"><img src={backgroundphoto} alt="" id="firstimage" /></div>
    </div>
    <div className="description">A week in JALANDHAR with some of the most influential innovators of our time.</div>
    <div className="aboutevent">
     <div className="date">20-26</div>
    <div className="month">February</div>
    <div className="xceed">XCEED</div>
    <div className="location">NIT Jalandhar</div>
    </div>
    </>
  );
}
