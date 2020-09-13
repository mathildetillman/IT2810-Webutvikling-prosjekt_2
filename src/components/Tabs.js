import React, { useState } from "react";

export default function Tabs(props) {
  function handleTabChange(e) {
    props.changeActiveTab(e.target.name);
  }

  return (
    <div className="tab flex-container-tab">
      <button
        className={props.active === "0" ? "active tab" : "tab"}
        name="0"
        onClick={handleTabChange}
      >
        Art 1
      </button>
      <button
        className={props.active === "1" ? "active tab" : "tab"}
        name="1"
        onClick={handleTabChange}
      >
        Art 2
      </button>
      <button
        className={props.active === "2" ? "active tab" : "tab"}
        name="2"
        onClick={handleTabChange}
      >
        Art 3
      </button>
      <button
        className={props.active === "3" ? "active tab" : "tab"}
        name="3"
        onClick={handleTabChange}
      >
        Art 4
      </button>
    </div>
  );
}
