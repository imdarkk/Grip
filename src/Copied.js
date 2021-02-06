import React from "react";

import "./styles/Copied.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/fontawesome-free-solid";

class Copied extends React.Component {
  render() {
    return (
      <div className="wrapperCopied">
        <FontAwesomeIcon icon={faCheck} id="check" />
        <p id="copiedText">Successfully copied!</p>
      </div>
    );
  }
}

export default Copied;
