import React, { Component } from "react";
import MainPage from "./MainPage";
import propTypes from "prop-types";
import { Query } from "react-apollo";
import { ActivityIndicator, View, Text } from "react-native";
import { AllDataQuery } from "../../apollo";

class MainPageContainer extends Component {
  static navigationOptions = {
    title: "GROUND CONTROL",
    header: null
  };
  render() {
    return (
      <Query query={AllDataQuery}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <View style={{ flex: 1, justifyContent: "center" }}>
                <ActivityIndicator size="large" color="#1CC6B1" />
              </View>
            );
          if (error) return <Text>`${error}`</Text>;
          if (data) {
            return (
              <MainPage
                navigation={this.props.navigation}
                session={data.allWorkoutSessions}
                challenges={data.allChallenges}
              />
            );
          }
        }}
      </Query>
    );
  }
}

MainPageContainer.propTypes = {
  session: propTypes.object.isRequired
};

export default MainPageContainer;
