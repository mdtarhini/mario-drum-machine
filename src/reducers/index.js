import { combineReducers } from "redux";
import BumpSound from "../assets/sounds/mario-bros-bump.wav";
import CoinSound from "../assets/sounds/mario-bros-coin.wav";
import FireBallSound from "../assets/sounds/mario-bros-fireball.wav";
import FireWorksSound from "../assets/sounds/mario-bros-fireworks.wav";
import JumpSound from "../assets/sounds/mario-bros-jump.wav";
import KickSound from "../assets/sounds/mario-bros-kick.wav";
import OneUpSound from "../assets/sounds/mario-bros-one-up.wav";
import StompSound from "../assets/sounds/mario-bros-stomp.wav";
import BreakBlockSound from "../assets/sounds/mario-bros-break-block.wav";

const buttonsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BUTTONS":
      return [
        {
          label: "Q",
          url: CoinSound,
          description: "Coin",
        },
        {
          label: "W",
          url: FireBallSound,
          description: "Fire ball",
        },
        {
          label: "E",
          url: FireWorksSound,
          description: "Fireworks",
        },
        {
          label: "A",
          url: JumpSound,
          description: "Jump",
        },
        {
          label: "S",
          url: KickSound,
          description: "Kick",
        },
        {
          label: "D",
          url: OneUpSound,
          description: "1 Up",
        },
        {
          label: "Z",
          url: StompSound,
          description: "Stomp",
        },
        {
          label: "X",
          url: BreakBlockSound,
          description: "Break Block",
        },
        {
          label: "C",
          url: BumpSound,
          description: "Bump",
        },
      ];
  }
  return state;
};

const displayReducer = (state = " ", action) => {
  if (action.type === "SHOW_DESCRIPTION") {
    return action.payload;
  }
  return state;
};
export default combineReducers({
  buttonsReducer: buttonsReducer,
  displayReducer: displayReducer,
});
