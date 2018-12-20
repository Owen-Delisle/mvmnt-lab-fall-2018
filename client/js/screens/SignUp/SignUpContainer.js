import React, { Component, Fragment } from "react";
import SignUp from "./SignUp";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const SignupMutation = gql`
  mutation CreateUser(
    $email: String!
    $password: String!
    $firstname: String!
    $lastname: String!
  ) {
    signupUser(
      email: $email
      password: $password
      firstname: $firstname
      lastname: $lastname
    ) {
      id
      token
    }
  }
`;

class SignUpContainer extends Component {
  static navigationOptions = {
    headerTitleStyle: {
      color: "white",
      fontSize: 14
    },
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "transparent",
      borderBottomColor: "transparent"
    }
  };
  render() {
    return (
      <Mutation mutation={SignupMutation}>
        {signupUser => (
          <Fragment>
            <SignUp signup={signupUser} navigation={this.props.navigation} />
          </Fragment>
        )}
      </Mutation>
    );
  }
}

export default SignUpContainer;
