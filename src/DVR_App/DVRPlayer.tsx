import React from "react";
import PlayerControl from "./components/player/PlayerControl";
import TimelineControl from "./components/timeline/TimelineControl";
import "./styles/App.scss";

interface ChildProps {
  baseUrl: string | undefined;
  streamName: string | undefined;
}

const DVRPlayer: React.FC<ChildProps> = ({ baseUrl, streamName }) => {
// function DVRPlayer({}:{baseUrl: string, streamName: string}) {
  return (
    <div className="dvr_player">
      <PlayerControl baseUrl={baseUrl} streamName={streamName} />
      <TimelineControl />
    </div>
  );
}

export default DVRPlayer;
