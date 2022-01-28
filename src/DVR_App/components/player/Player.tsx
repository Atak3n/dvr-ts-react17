import { Fragment, useRef, useEffect } from "react";
import "./player.scss";
const FlussonicMsePlayer = require("@flussonic/flussonic-mse-player/dist/FlussonicMsePlayer");
interface ChildProps {
  videoMuted?: boolean | undefined;
}

const Player: React.FC<ChildProps> = ({ videoMuted }) => {
  const _video = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    console.log(_video);
    start();
  }, []);

  const start = () => {
    const player = new FlussonicMsePlayer(
      _video.current,
      "wss://a-machinskiy.erlyvideo.ru/test/mse_ld",
      {
        // debug: this.props.debug,
        connectionRetries: 1,
        // onProgress: onProgress.bind(this),
        onDisconnect: (status: string) => {
          console.log("Websocket status:", status);
        },
        // onError: onError.bind(this),
        // onEvent: (data) => {
        //   this.props.onEvent(this.props.name, data);
        // },
      }
    );
    let playPromise = player.play();
  };

  return (
    <Fragment>
      <video
        ref={_video}
        //       onDoubleClick={this.handleFullScreen}
        //       style={this.getWrapperWidth()}
        muted={videoMuted}
        className="video-js"
        controls={false}
        playsInline
      />
    </Fragment>
  );
};

export default Player;
