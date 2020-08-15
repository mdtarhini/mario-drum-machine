import React from "react";
import { connect } from "react-redux";
import { fetchButtons } from "../actions";
import AudioButton from "./AudioButton";
import "./App.css";

class DrumMachine extends React.Component {
  componentDidMount() {
    this.props.fetchButtons();
  }
  renderedGrid() {
    return this.props.buttons.map((button) => {
      return (
        <React.Fragment>
          <div className="col-4 text-center">
            <AudioButton
              label={button.label}
              url={button.url}
              description={button.description}
            />
          </div>
        </React.Fragment>
      );
    });
  }
  render() {
    return (
      <div id="drum-machine" className="container">
        <div className="row no-gutters">{this.renderedGrid()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { buttons: state.buttonsReducer };
};
export default connect(mapStateToProps, { fetchButtons: fetchButtons })(
  DrumMachine
);
