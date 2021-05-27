import React, { Component } from "react";
// import Title from "./Title";
import Photowall from "./photowall";
import AddPhoto from "./AddPhoto";
import { Route, Link } from "react-router-dom";
import Single from "./single";
// import { removePost } from "./redux/actions";

class Main extends Component {
  // constructor() {
  //   super();
  // }

  // componentDidMount() {
  //   this.props.removePost(1);
  // }

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Photowall {...this.props} />
            </div>
          )}
        />

        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />

        <Route
          path="/single/:id"
          render={(params) => <Single {...this.props} {...params} />}
        />
      </div>
    );
  }
}
export default Main;
