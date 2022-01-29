import React, { Fragment, useRef, useEffect } from "react";
import "./player.scss";
// const FlussonicMsePlayer = require("@flussonic/flussonic-mse-player/dist/FlussonicMsePlayer");
import Hls from "hls.js";

interface ChildProps {
  videoMuted?: boolean | undefined;
  baseUrl: string | undefined;
  streamName: string | undefined;
}

const Player: React.FC<ChildProps> = ({ videoMuted, baseUrl, streamName }) => {
  const _video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (null !== _video.current) {
      start(_video.current);
    }
  }, []);

  const start = (video: HTMLVideoElement) => {
    // const player = new FlussonicMsePlayer(
    //   _video.current,
    //   "wss://a-machinskiy.erlyvideo.ru/test/mse_ld",
    //   {
    //     // debug: this.props.debug,
    //     connectionRetries: 1,
    //     // onProgress: onProgress.bind(this),
    //     onDisconnect: (status: string) => {
    //       console.log("Websocket status:", status);
    //     },
    //     // onError: onError.bind(this),
    //     // onEvent: (data) => {
    //     //   this.props.onEvent(this.props.name, data);
    //     // },
    //   }
    // );
    // let playPromise = player.play();
    const url = `${baseUrl}/${streamName}/index.m3u8`;
    const handleManifestParsed = () => {
      video.play();
    };
    const hls = new Hls({
      maxMaxBufferLength: 60,
      enableWorker: true,
      lowLatencyMode: true,
    });
    hls.attachMedia(video);
    hls.on(Hls.Events.MEDIA_ATTACHED, () => {
      hls.loadSource(url);
      hls.on(Hls.Events.MANIFEST_PARSED, handleManifestParsed);
    });
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
