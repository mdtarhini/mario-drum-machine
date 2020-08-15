import React from "react";
import { connect } from "react-redux";

import "./App.css";

const Display = (props) => {
  return (
    <div id="display" className="container mb-3 d-flex">
      <h6 className="m-auto">{props.text}</h6>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { text: state.displayReducer };
};
export default connect(mapStateToProps)(Display);
