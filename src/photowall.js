import React from "react";
import Photo from "./Photo";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Photowall(props) {
  return (
    <div>
      <Link className="addicon" to="/AddPhoto"></Link>
      {/* <a className="addicon" onClick={props.onNavigate} href="#AddPhoto"></a> */}
      {/* <button onClick={() => props.onNavigate()} className="addicon">
        +
      </button> */}
      <div className="photoGrid">
        {props.posts
          .sort((x, y) => {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo key={index} post={post} {...props} index={index} />
          ))}
      </div>
    </div>
  );
}

Photowall.propTypes = {
  posts: propTypes.array.isRequired,
  // onRemovePhoto: propTypes.func.isRequired,
};

export default Photowall;

// class Photowall extends Component {
//   render() {
//     return (
//       <div className="photoGrid">
//         {this.props.posts.map((post, index) => (
//           <Photo key={index} post={post} />
//         ))}
//       </div>
//     );
//   }
// }
