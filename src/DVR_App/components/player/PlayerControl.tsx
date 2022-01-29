import React from "react";
import Player from "./Player";
import "./player_control.scss";

interface ChildProps {
  baseUrl: string | undefined;
  streamName: string | undefined;
}

const PlayerControl: React.FC<ChildProps> = ({ baseUrl, streamName }) => {
  return (
    <div className="player_control">
      <p>PlayerControl</p>
      <Player videoMuted={true} baseUrl={baseUrl} streamName={streamName} />
    </div>
  );
};

export default PlayerControl;
