import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this._seeNotification = id => {
      this.setState(currentState => {
        return {
          ...currentState,
          notifications: {
            ...currentState.notifications,
            [id]: {
              ...currentState.notifications[id],
              seen: true
            }
          }
        };
      });
    };

    this._deleteNotification = id => {
      this.setState(currentState => {
        const newState = delete currentState.notifications[id];
        return newState;
      });
    };

    this.state = {
      notifications: {
        "1": {
          id: 1,
          text: "first message",
          seen: false
        },
        "2": {
          id: 2,
          text: "second",
          seen: false
        },
        "3": {
          id: 3,
          text: "third",
          seen: false
        }
      },
      seeNotification: this._seeNotification,
      deleteNotification: this._deleteNotification
    };
  }

  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
