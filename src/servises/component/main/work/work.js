import React from "react";
import './work.css'
import img1 from "../../../img/site.png"

function work() {
  return (
     <div id="Work" className="work">
     <h1>My works</h1>
      <a href="https://midnight-bar.netlify.app"><img src={img1} alt="a"/></a>
      <a href="https://midnight-bar.netlify.app"><img src={img1} alt="a"/></a>
      <a href="https://midnight-bar.netlify.app"><img src={img1} alt="a"/></a>
      <a href="https://midnight-bar.netlify.app"><img src={img1} alt="a"/></a>
     </div>
  );
}

export default work;
