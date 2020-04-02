import React from "react";
// import axios from "axios";
import "./style.css";

function Search() {
  return (
    <div className="input-group container mb-3">
        <input type="text" className="form-control" placeholder="Search"/>
        <div className="input-group-append">
            <button className="input-group-text" id="basic-addon2">Search</button>
        </div>
    </div>
    
  );
}
//     axios({
//         method: 'post',
//         url: '/user/12345',
//         data: {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//         }
//     });
// }

export default Search;