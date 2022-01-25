import PlayerControl from "./components/player/PlayerControl";
import TimelineControl from "./components/timeline/TimelineControl";
import "./styles/App.scss";

function DVRPlayer() {
  return (
    <div className="dvr_player">
      <PlayerControl />
      <TimelineControl />
    </div>
  );
}

export default DVRPlayer;
