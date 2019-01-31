import React, { Component } from "react";
import Reminders from "./Reminders";
import propTypes from "prop-types";

class RemindersContainer extends Component {
  static navigationOptions = {
    title: "REMINDERS",
    headerTintColor: "white",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    }
  };
  render() {
    return <Reminders navigation={this.props.navigation} />;
  }
}

RemindersContainer.propTypes = {
  navigation: propTypes.object.isRequired
};

export default RemindersContainer;
