import Player from "./Player";
import "./player_control.scss";
interface ChildProps {}

const PlayerControl: React.FC<ChildProps> = () => {
  return (
    <div className="player_control">
      <p>PlayerControl</p>
      <Player videoMuted={true} />
    </div>
  );
};

export default PlayerControl;
