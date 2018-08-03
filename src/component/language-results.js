import React from "react";

import Wrapper from "./hoc";

const languageResults = props => {
  return (
    <Wrapper classes="language-output">
      <span>
        {props.error
          ? props.error
          : props.languageDetected
            ? props.languageDetected.map((language, i) => (
                <Wrapper key={i} classes="detected-lang">
                  {language}
                </Wrapper>
              ))
            : "Enter text and click on submit button to see the language"}
      </span>
    </Wrapper>
  );
};

export default languageResults;
