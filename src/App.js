import "./styles/App.scss";
import "./styles/slid.css";

import React from "react";
import Alert from "./Alert";
import Copied from "./Copied";

import copyImg from "./images/copy.svg";
import reroll from "./images/reroll.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "8",
      isHidden: true,
      reroll: false,
      success: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    var result = "";

    function getRandomString(length) {
      var randomChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*/><.,?)_(+=-`~";
      for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }
      return result;
    }

    getRandomString(this.state.value);
    return (
      <div className="App">
        <div id="mainWrapper">
          <img
            src={reroll}
            alt=""
            id="reroll"
            onClick={() => this.setState({ reroll: true })}
          />
          <div id="wrapperRes">
            <input
              type="range"
              className="slider"
              min={0}
              max={55}
              step={1}
              defaultValue={8}
              value={this.state.value}
              onChange={this.handleChange}
            />
            <p id="amountOfChars">
              Length: <span className="pass">{this.state.value}</span>
            </p>
            <div id="wrapper">
              <div>
                {result.length > 7 ? (
                  <div id="wrapperResult">
                    <span id="resultText">
                      Password:
                      <img
                        src={copyImg}
                        alt=""
                        id="copyBtn"
                        onClick={() => {
                          navigator.clipboard.writeText(result);
                          this.setState({ success: true });
                          setTimeout(() => {
                            this.setState({success: false})
                          }, 2000)
                        }}
                      />
                      <br />
                      <p className="pass password">{result}</p>
                    </span>
                  </div>
                ) : (
                  <div>
                    <p id="disclaimer">
                      <span id="discBold">Disclaimer:</span> We recommend a
                      password more than 8 characters in length. <br />
                    </p>
                    <div id="wrapperResult">
                      <span id="resultText">
                        Password:
                        <img
                          src={copyImg}
                          alt=""
                          id="copyBtn"
                          onClick={() => {
                            navigator.clipboard.writeText(result);
                            this.setState({ success: true });
                            setTimeout(() => {
                              this.setState({ success: false });
                            }, 2000);
                          }}
                        />
                        <br />
                        <p className="pass password" id="copied">
                          {result}
                        </p>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div id="wrapperDisclaimerBtn">
          <p
            id="disclaimerButton"
            onClick={() => {
              this.setState({ isHidden: false });
            }}
          >
            Disclaimer
          </p>
        </div>
        {!this.state.isHidden && (
          <Alert hide={() => this.setState({ isHidden: true })} />
        )}
        {this.state.success ? <Copied /> : <></>}
      </div>
    );
  }
}
export default App;
