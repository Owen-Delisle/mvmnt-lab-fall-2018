import React, { Component } from "react";
import UserContext from "../../context/UserContext/UserProvider";
import DailyReportModal from "./DailyReportModal";
import { graphql, compose, Query } from "react-apollo";
import { CreateDailyReport } from "../../apollo";
import { CreateChallengeMutation } from "../../apollo";
import { UpdateChallengeMutation } from "../../apollo";
import { AllChallengesQuery } from "../../apollo";
import { AddPoseToDailyReportMutation } from "../../apollo";

class DailyReportModalContainer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ id }) => {
          return (
            <Query query={AllChallengesQuery} variables={{ userId: id }}>
              {({ data }) => {
                return (
                  <DailyReportModal
                    workoutCompleted={this.props.workoutCompleted}
                    createReport={this.props.createReport}
                    updateChallenge={this.props.updateChallenge}
                    allChallenges={data}
                    createChallenge={this.props.createChallenge}
                    userId={id}
                    navigation={this.props.navigation}
                    poses={this.props.poses}
                    addPoseToDailyReport={this.props.addPoseToDailyReport}
                  />
                );
              }}
            </Query>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default compose(
  graphql(CreateDailyReport, {
    name: "createReport"
  }),
  graphql(UpdateChallengeMutation, {
    name: "updateChallenge"
  }),
  // graphql(AllChallengesQuery, {
  //   name: "allChallenges"
  // }),
  graphql(CreateChallengeMutation, {
    name: "createChallenge"
  }),
  graphql(AddPoseToDailyReportMutation, {
    name: "addPoseToDailyReport"
  })
)(DailyReportModalContainer);
