import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Image
} from "react-native";
import Profile from "./Profile";
import { Query, compose, graphql } from "react-apollo";
import UserContext from "../../context/UserContext/UserProvider";
import CoachContext from "../../context/CoachContext/CoachProvider";
import PropTypes from "prop-types";
import { QueryUser, AllChallengesQuery } from "../../apollo/index";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title: "PROFILE",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    },
    headerRight: (
      <CoachContext.Consumer>
        {({ id }) => {
          if (!id) {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("EditProfile");
                }}
              >
                <Text style={{ color: "white", marginRight: 8 }}>EDIT</Text>
              </TouchableOpacity>
            );
          }
        }}
      </CoachContext.Consumer>
    ),
    headerBackground: (
      <Image source={require("../../assets/images/headerSmall.png")} />
    )
  });

  render() {
    return (
      <UserContext.Consumer>
        {({ removeUserIdToken, id }) => {
          if (!id) {
            return (
              <CoachContext.Consumer>
                {({ id }) => {
                  if (!id) {
                    this.props.navigation.navigate("Auth");
                  } else {
                    console.log("1");
                    console.log(this.props.navigation.getParam("userId"));
                    userId = this.props.navigation.getParam("userId");
                    return (
                      <Query query={QueryUser} variables={{ id: userId }}>
                        {({ loading, error, data }) => {
                          if (loading)
                            return (
                              <View
                                style={{ flex: 1, justifyContent: "center" }}
                              >
                                <ActivityIndicator
                                  size="large"
                                  color="#1CC6B1"
                                />
                              </View>
                            );
                          if (error) return <Text>{error}</Text>;
                          if (data) {
                            console.log(this.props);
                            return (
                              <Profile
                                navigation={this.props.navigation}
                                dataProfile={data}
                                logout={removeUserIdToken}
                                id={userId}
                                coachId={id}
                                allChallenges={
                                  this.props.allChallenges.allChallenges
                                }
                              />
                            );
                          }
                        }}
                      </Query>
                    );
                  }
                }}
              </CoachContext.Consumer>
            );
          } else {
            console.log(2);
            return (
              <Query query={QueryUser} variables={{ id }}>
                {({ loading, error, data }) => {
                  if (loading)
                    return (
                      <View style={{ flex: 1, justifyContent: "center" }}>
                        <ActivityIndicator size="large" color="#1CC6B1" />
                      </View>
                    );
                  if (error) return <Text>{error}</Text>;
                  if (data) {
                    return (
                      <Profile
                        navigation={this.props.navigation}
                        dataProfile={data}
                        logout={removeUserIdToken}
                        id={id}
                        allChallenges={this.props.allChallenges.allChallenges}
                      />
                    );
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

export default compose(
  graphql(
    AllChallengesQuery,
    {
      name: "allChallenges"
    },
    {
      variables: { userId: "cjqzkqag704fx017744u9sfz0" }
    }
  )
)(ProfileContainer);

ProfileContainer.defaultProps = {
  allChallenges: null
};

ProfileContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
