import React from "react";

export default function RadioButtons(props) {
  function handleChange(e) {
    console.log(props.active);
    props.changeActiveArt(e.target.name, e.target.value);
  }

  return (
    <form>
      <h1>{props.category}</h1>
      {props.choices.map((element, index) => {
        return (
          <div key={index} className="radio">
            <label className="pointer">
              <input
                type="radio"
                name={props.category}
                value={element}
                checked={props.active.includes(element)}
                onChange={handleChange}
                className="pointer"
              />
              {element}
              <span className="checkmark"></span>
            </label>
          </div>
        );
      })}
    </form>
  );
}
