import React from "react";
import Tabs from "./Tabs";

export default function ArtContainer(props) {
  return (
    <div className="card">
      <div>
        <Tabs
          changeActiveTab={props.changeActiveTab}
          active={props.activeTab}
        />
      </div>
      <div className="grid-container-art">
        <div
          dangerouslySetInnerHTML={{ __html: props.image }}
          className="grid-item-image"
        ></div>
        <div className="grid-item-text">
          {props.text !== null &&
            props.text.split("\n").map((i, key) => {
              return <p key={key}>{i}</p>;
            })}
        </div>
        <div className="grid-item-audio">
          <audio src={props.audio} type="audio/mp3" controls></audio>
        </div>
      </div>
    </div>
  );
}
