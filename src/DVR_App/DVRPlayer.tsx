import React from "react";
import PlayerControl from "./components/player/PlayerControl";
import TimelineControl from "./components/timeline/TimelineControl";
import "./styles/App.scss";

interface ChildProps {
  baseUrl: string | undefined;
  streamName: string | undefined;
  from?: number | null;
}

const DVRPlayer: React.FC<ChildProps> = ({ baseUrl, streamName, from }) => {
  // function DVRPlayer({}:{baseUrl: string, streamName: string}) {
  return (
    <div className="dvr_player">
      <PlayerControl baseUrl={baseUrl} streamName={streamName} />
      <TimelineControl
        from={from || Math.round(Date.now() / 1000)}
        url={`${baseUrl}/${streamName}`}
      />
    </div>
  );
};

export default DVRPlayer;
