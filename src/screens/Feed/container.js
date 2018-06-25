import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as feedActions } from "src/modules/feed";
import View from "./";

const mapDispatchToProps = dispatch => {
  const actions = {
    loadFeed: feedActions.loadFeed
  };

  return bindActionCreators(actions, dispatch);
};

const mapStateToProps = ({ feed }) => ({
  ...feed
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
