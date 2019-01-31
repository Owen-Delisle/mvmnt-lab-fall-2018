import React, { Component } from "react";
import WorkOutSession from "./WorkOutSession";
import propTypes from "prop-types";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Text } from "react-native";

const SessionDataQuery = gql`
  query allPoses($filter: PoseFilter) {
    allPoses(filter: $filter) {
      description
      duration
      icon
      id
      title
      video
    }
  }
`;

class WorkOutSessionContainer extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Query query={SessionDataQuery}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return `${error}`;
          if (data) {
            return (
              <WorkOutSession
                navigation={this.props.navigation}
                session={data}
              />
            );
          }
        }}
      </Query>
    );
  }
}

WorkOutSessionContainer.propTypes = {
  navigation: propTypes.object.isRequired
};

export default WorkOutSessionContainer;
