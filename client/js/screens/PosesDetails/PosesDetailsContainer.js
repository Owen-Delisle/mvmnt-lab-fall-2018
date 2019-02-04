import React, { Component } from "react";
import PosesDetails from "./PosesDetails";
import propTypes from "prop-types";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Text, View, ActivityIndicator } from "react-native";

const PoseDetailsQuery = gql`
  query Pose($id: ID) {
    Pose(id: $id) {
      description
      duration
      icon
      title
      video
    }
  }
`;

class PosesDetailsContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("title"),
    headerTintColor: "white",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    }
  });

  name = this.props;
  render() {
    return (
      <Query
        query={PoseDetailsQuery}
        variables={{ id: this.props.navigation.state.params.id }}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <View style={{ flex: 1, justifyContent: "center" }}>
                <ActivityIndicator size="large" color="#1CC6B1" />
              </View>
            );
          if (error) return <Text>`${error}`</Text>;
          if (data) {
            return <PosesDetails posesDetails={data.Pose} />;
          }
        }}
      </Query>
    );
  }
}

PosesDetailsContainer.propTypes = {
  navigation: propTypes.object.isRequired
};

export default PosesDetailsContainer;
