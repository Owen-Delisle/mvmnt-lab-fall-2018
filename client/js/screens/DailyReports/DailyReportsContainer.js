import React, { Component } from "react";
import DailyReports from "./DailyReports";
import gql from "graphql-tag";
import { View, Text, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import styles from "./styles";
import UserContext from "../../context/UserContext/UserProvider";

const DailyReportQuery = gql`
  query allDailyReports($userId: String) {
    allDailyReports(filter: { userId: $userId }) {
      id
      date
      pain
      score
      userId
      work
      painDescription
      notes
    }
  }
`;
class DailyReportsContainer extends Component {
  static navigationOptions = {
    title: "DAILY REPORTS",
    headerTintColor: "white",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
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
              <Query
                query={DailyReportQuery}
                variables={{ userId }}
                fetchPolicy="network-only"
              >
                {({ loading, error, data }) => {
                  if (loading)
                    return (
                      <View style={{ flex: 1, justifyContent: "center" }}>
                        <ActivityIndicator size="large" color="#1CC6B1" />
                      </View>
                    );
                  if (error) return <Text>{error}</Text>;
                  if (data) {
                    return <DailyReports data={data} />;
                  }
                }}
              </Query>
            );
          } else {
            return (
              <Query
                query={DailyReportQuery}
                variables={{ userId: id }}
                fetchPolicy="network-only"
              >
                {({ loading, error, data }) => {
                  if (loading)
                    return (
                      <View style={{ flex: 1, justifyContent: "center" }}>
                        <ActivityIndicator size="large" color="#1CC6B1" />
                      </View>
                    );
                  if (error) return `${error}`;
                  if (data) {
                    return <DailyReports data={data} />;
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

export default DailyReportsContainer;
