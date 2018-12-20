import React, { Component } from "react";
import SignIn from "./SignIn";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import UserContext from "../../context/UserContext/UserProvider";
import CoachContext from "../../context/CoachContext/CoachProvider";
import PropTypes from "prop-types";

const LoginMutation = gql`
  mutation AuthenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
      id
    }
  }
`;

class SignInContainer extends Component {
  static navigationOptions = {
    header: null,
    headerStyle: {
      backgroundColor: "transparent",
      borderBottomColor: "transparent"
    }
  };
  render() {
    return (
      <Mutation mutation={LoginMutation}>
        {login => (
          <UserContext.Consumer>
            {({ storeSessionToken, token }) => {
              if (token) {
                this.props.navigation.navigate("Main");
              } else {
                return (
                  <CoachContext.Consumer>
                    {({ token }) => {
                      if (token) {
                        this.props.navigation.navigate("Coach");
                      } else {
                        return (
                          <SignIn
                            login={login}
                            storeSessionToken={storeSessionToken}
                            navigation={this.props.navigation}
                          />
                        );
                      }
                    }}
                  </CoachContext.Consumer>
                );
              }
            }}
          </UserContext.Consumer>
        )}
      </Mutation>
    );
  }
}

export default SignInContainer;

SignInContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
