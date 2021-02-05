import React from 'react';

import './styles/Alert.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle, faTimes } from "@fortawesome/fontawesome-free-solid";

class Alert extends React.Component {
    render() {
        return (
          <div className="wrapperAlert">
            <FontAwesomeIcon icon={faExclamationTriangle} id="warningSign" />
            <div id="wrapperText">
              <p className="textAlert">
                We have no responsibility if your password gets leaked or
                hacked.
              </p>
              <p className="textAlert">
                We suggest saving the password after using it, or using the
                google password manager.
              </p>
            </div>
            <FontAwesomeIcon icon={faTimes} id="closeBtn" onClick={this.props.hide}/>
          </div>
        );
    }
}

export default Alert;