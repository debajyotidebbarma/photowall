import main from "./Main";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./redux/actions";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    posts: state.postReducer,
    comments: state.commentReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(main));

export default App;
