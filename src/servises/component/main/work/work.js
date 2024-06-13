import React from "react";
import './work.css'
import img1 from "../../../img/site.png"
import chess from "../../../img/chess.png"
import random from "../../../img/random.png"
import quiz from  "../../../img/img.png"
function work() {
  return (
     <div id="Work" className="work">
     <h1>My works</h1>
      <a href="https://midnight-bar.netlify.app"><img src={img1} alt="a"/></a>
      <a href="https://chesslogik.netlify.app"><img src={chess} alt="a"/></a>
      <a href="https://randompasswordlogik.netlify.app"><img src={random} alt="a"/></a>
      <a href="https://quiz-logik.netlify.app"><img src={quiz} alt="a"/></a>
     </div>
  );
}

export default work;
