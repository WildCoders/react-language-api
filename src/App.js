import React, { Component } from "react";
import axios from "axios";

import UserControls from "./component/user-controls";
import LanguageDetected from "./component/language-results";
import Wrapper from "./component/hoc";

import "./App.css";

class App extends Component {
  state = {
    inputText: "",
    languageDetected: null,
    error: null
  };

  inputHandler = el => {
    this.setState({ inputText: el.target.value });
  };

  resetHandler = () => {
    this.setState({ inputText: "", languageDetected: null, error: null });
  };

  submitHandler = () => {
    var request_uri =
      "http://apilayer.net/api/detect?access_key=b01a74a07356338e4f9e8ab80029ad1e&query=" +
      encodeURIComponent(this.state.inputText);

    // Make a request for a user with a given ID
    axios.get(request_uri).then(
      response => {
        console.log(response.data);
        // handle success
        if (response.data.success && response.data.results.length) {
          let languages = [];
          response.data.results.forEach(language => {
            languages.push(language.language_name);
          });

          this.setState({ languageDetected: languages, error: null });
        } else {
          console.log(response.data.error.info);
          this.setState({ languageDetected: null, error: response.data.error.info });
        }
      },
      error => {
        this.setState({ languageDetected: null, error: error });
      }
    );
  };

  render() {
    return (
      <Wrapper classes="App">
        <Wrapper classes="header">
          <span>Assesment</span>
        </Wrapper>
        <div>
          <UserControls
            onSubmit={this.submitHandler}
            onReset={this.resetHandler}
            onChange={this.inputHandler}
            inputText={this.state.inputText}
          />

          <LanguageDetected 
            languageDetected={this.state.languageDetected} 
            error={this.state.error}
          />
        </div>
      </Wrapper>
    );
  }
}

export default App;
