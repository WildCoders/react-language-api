import React from "react";

import Wrapper from "./hoc";
import Button from "./button";

const userControls = props => {
  return (
    <Wrapper classes="container">
      <div className="label-controls">
        <span>Enter Text in any Language</span>
        <div className="controls">
          <Button onClick={props.onSubmit}>Submit</Button>
          <Button onClick={props.onReset}>Reset/Clear</Button>
        </div>
        <textarea onChange={props.onChange} value={props.inputText} />
      </div>
    </Wrapper>
  );
};

export default userControls;
