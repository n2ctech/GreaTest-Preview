import React from "react";
import ReactPlayer from "react-player";
import "./App.css";

function App() {
  return (
    <ReactPlayer
      url="http://stream.mux.com/F9DmevVo7CcsiuyQqPkb8E1OS3u01iPBQ.m3u8"
      playing
      width="320"
      height="480"
    />
  );
}

export default App;
