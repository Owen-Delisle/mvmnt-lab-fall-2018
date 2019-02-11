import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import CoachContext from "../../context/CoachContext/CoachProvider";
import CoachAccess from "./CoachAccess";

const LoginMutation = gql`
  mutation AuthenticateCoach($email: String!, $password: String!) {
    authenticateCoach(email: $email, password: $password) {
      token
      id
    }
  }
`;

class CoachAccessContainer extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Mutation mutation={LoginMutation}>
        {login => (
          <CoachContext.Consumer>
            {({ storeSessionToken, token }) => {
              if (token) {
                this.props.navigation.navigate("Coach");
              } else {
                return (
                  <CoachAccess
                    login={login}
                    storeSessionToken={storeSessionToken}
                    navigation={this.props.navigation}
                  />
                );
              }
            }}
          </CoachContext.Consumer>
        )}
      </Mutation>
    );
  }
}

export default CoachAccessContainer;
