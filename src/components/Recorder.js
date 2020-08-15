import React from "react";
import { connect } from "react-redux";

import "./App.css";

const Recorder = (props) => {
  return (
    <div id="recorder" className="container d-flex mt-3">
      <button className="btn btn-info btn-small p-0 m-auto">Record</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { text: state.displayReducer };
};
export default connect(mapStateToProps)(Recorder);

// <i class="fas fa-stop-circle"></i>
// <i class="fas fa-record-vinyl"></i>
// <i class="fas fa-play-circle"></i>
