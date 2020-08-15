import React from "react";
import { connect } from "react-redux";
import { showDescription } from "../actions";
import "./App.css";

class AudioButton extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the audio DOM element
    this.audio = React.createRef();
  }

  handleKeyDown = (event) => {
    if (event.key.toLowerCase() === this.props.label.toLowerCase()) {
      this.Play();
    }
  };
  componentDidMount = () => {
    document.addEventListener("keydown", (event) => this.handleKeyDown(event));
  };
  Play = () => {
    this.audio.current.play();
    this.props.showDescription(this.props.description);
  };

  render() {
    return (
      <div
        id={this.props.description}
        className="drum-pad d-flex"
        onClick={this.Play}
      >
        <audio
          ref={this.audio}
          src={this.props.url}
          id={this.props.label}
          className="clip"
        ></audio>
        <span className="m-auto">{this.props.label}</span>
      </div>
    );
  }
}

export default connect(null, { showDescription: showDescription })(AudioButton);
