import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Client from "./Client";
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import { formatSessionData } from "../../lib/helper";
import CoachContext from "../../context/CoachContext/CoachProvider";

const Clients = gql`
  query allUsers($filter: UserFilter) {
    allUsers(filter: $filter) {
      email
      firstname
      id
      image
      lastname
      password
    }
  }
`;

class ClientContainer extends Component {
  static navigationOptions = {
    title: "CLIENTS",
    headerTintColor: "white",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    },
    headerRight: (
      <CoachContext.Consumer>
        {({ id, removeCoachIdToken }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                removeCoachIdToken(id);
              }}
            >
              <Text style={{ color: "white", marginRight: 8 }}>LOGOUT</Text>
            </TouchableOpacity>
          );
        }}
      </CoachContext.Consumer>
    ),
    headerBackground: (
      <Image source={require("../../assets/images/headerSmall.png")} />
    )
  };
  render() {
    return (
      <CoachContext.Consumer>
        {({ id }) => {
          if (!id) {
            this.props.navigation.navigate("Auth");
          } else {
            return (
              <Query query={Clients}>
                {({ loading, error, data }) => {
                  if (loading) return <ActivityIndicator />;
                  if (error) return <Text>{error}</Text>;
                  if (data) {
                    return (
                      <View>
                        <Client
                          client={formatSessionData(data.allUsers)}
                          navigation={this.props.navigation}
                        />
                      </View>
                    );
                  }
                }}
              </Query>
            );
          }
        }}
      </CoachContext.Consumer>
    );
  }
}

export default ClientContainer;
