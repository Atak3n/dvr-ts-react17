import "./player.scss";
const FlussonicMsePlayer = require("@flussonic/flussonic-mse-player/dist/FlussonicMsePlayer");
interface ChildProps {
  videoMuted: boolean;
}

const Player: React.FC<ChildProps> = (videoMuted) => {
  // start() {
  //   this.player = new FlussonicMsePlayer(this._video, url, {
  //     debug: this.props.debug,
  //     connectionRetries: 1,
  //     onProgress: onProgress.bind(this),
  //     onDisconnect: (status) => {
  //       console.log('Websocket status:', status);
  //     },
  //     onError: onError.bind(this),
  //     onEvent: (data) => {
  //       this.props.onEvent(this.props.name, data);
  //     },
  //     onAutoplay: (func) => {
  //       console.log(func);
  //     },
  //     retroviewSendTime: this.props.retroviewSendTime
  //       ? this.props.retroviewSendTime
  //       : undefined,
  //     retroviewURL: this.props.retroviewURL
  //       ? this.props.retroviewURL
  //       : undefined,
  //   });
  // }

  return (
    <div className="player">
      <video
        // ref={(node) => {
        //         this._video = node;
        //       }}
        //       onDoubleClick={this.handleFullScreen}
        //       style={this.getWrapperWidth()}
        muted={videoMuted}
        className="video-js"
        controls={false}
        playsInline
      />
    </div>
  );
};

export default Player;
