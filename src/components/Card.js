import React from "react";
import "./style.css";

function Card(props) {
//   return (
//     <div className="card text-center">
//       <div className="card-header">
//         <h2>{props.heading}</h2>
//       </div>
//       <div className="card-body">{props.children}</div>
//     </div>
//   );
// }

return (
  <div className="card">
    <div className="img-container">
      {props.heading}
    </div>
    <div className="content">
      <div className="card-body">{props.children}</div>
        <span onClick={() => props.removeFriend(props.id)} className="remove">
          FIRE
        </span>
      </div>
      </div>
);
}

export default Card;
