import React from "react";

function EyesOnMe() {
  function hanFocus() {
    console.log("Good!");
  }

  function hanBlur() {
    console.log("Hey! Eyes on me!");
  }

  return (
    <button onFocus={hanFocus} onBlur={hanBlur}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
