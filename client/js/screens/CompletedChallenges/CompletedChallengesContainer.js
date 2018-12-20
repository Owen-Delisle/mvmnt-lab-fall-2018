import React, { Component } from "react";
import CompletedChallenges from "./CompletedChallenges";
import { Text, View } from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import UserContext from "../../context/UserContext/UserProvider";

const AllChallengesQuery = gql`
  query AllChallenges($userId: String) {
    allChallenges(filter: { userId: $userId }) {
      id
      startDate
      endDate
      score
      daysBetween
    }
  }
`;

class CompletedChallengesContainer extends Component {
  static navigationOptions = {
    title: "COMPLETED CHALLENGES",
    headerTintColor: "white",
    headerTitleStyle: {
      color: "white",
      fontSize: 14
    },
    headerStyle: {
      backgroundColor: "transparent",
      borderBottomColor: "transparent"
    }
  };
  render() {
    return (
      <UserContext.Consumer>
        {({ id }) => {
          if (!id) {
            userId = this.props.navigation.getParam("userId");
            return (
              <Query query={AllChallengesQuery} variables={{ userId }}>
                {({ loading, error, data }) => {
                  if (loading) return <Text>Loading</Text>;
                  if (error) return <Text>{error}</Text>;
                  if (data) {
                    return <CompletedChallenges data={data} />;
                  }
                }}
              </Query>
            );
          } else {
            return (
              <Query query={AllChallengesQuery} variables={{ userId: id }}>
                {({ loading, error, data }) => {
                  if (loading) return <Text>Loading</Text>;
                  if (error) return <Text>{error}</Text>;
                  if (data) {
                    return <CompletedChallenges data={data} />;
                  }
                }}
              </Query>
            );
          }
        }}
      </UserContext.Consumer>
    );
  }
}

export default CompletedChallengesContainer;
