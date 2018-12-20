import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import moment from "moment";
import styles from "./styles";
import PropTypes from "prop-types";
import WorkModal from "../WorkModal";
import PainModal from "../PainModal";

class DailyReportModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allChallenges: [],
      date: new Date().toISOString(),
      pain: 5,
      score: 0,
      work: 5,
      painDescription: "",
      notes: "",
      workModal: false,
      painModal: false
    };
    this.scores = [];
    this.days = 0;
    this.allChallengeResponse = {};
  }

  change(work) {
    this.setState(() => {
      return {
        work: parseFloat(work)
      };
    });
  }

  getAverageOfUserScores(arr) {
    const avg = 0;
    const sum = 0;
    sum = arr.reduce(function(a, b) {
      return a + b;
    });
    avg = sum / arr.length;
    return avg;
  }

  setCurrentChallengeDays(challenges) {
    challenges.map(challenge => {
      if (
        challenge.startDate <= new Date().toISOString() &&
        challenge.endDate >= new Date().toISOString()
      ) {
        this.days = challenge.score.length + 1;
      }
    });
  }

  toggleWorkModal() {
    this.setState({
      workModal: !this.state.workModal
    });
  }

  togglePainModal() {
    this.setState({
      painModal: !this.state.painModal
    });
  }

  setWork(work) {
    this.setState({
      work: work
    });
  }

  setPain(pain) {
    this.setState({
      pain: pain
    });
  }

  render() {
    return (
      <View style={styles.centerContainer}>
        <WorkModal
          workModal={this.state.workModal}
          toggleWorkModal={this.toggleWorkModal.bind(this)}
          togglePainModal={this.togglePainModal.bind(this)}
          setWork={this.setWork.bind(this)}
          days={this.days}
        />

        <PainModal
          painModal={this.state.painModal}
          togglePainModal={this.togglePainModal.bind(this)}
          setPain={this.setPain.bind(this)}
          allChallengeResponse={this.allChallengeResponse}
          createReport={this.props.createReport}
          updateChallenge={this.props.updateChallenge}
          work={this.state.work}
          userId={this.props.userId}
          createChallenge={this.props.createChallenge}
        />

        <TouchableOpacity
          onPress={() => {
            this.allChallengeResponse = this.props.allChallenges;
            this.setCurrentChallengeDays(
              this.allChallengeResponse.allChallenges
            );
            this.setState({ workModal: true });
          }}
        >
          <Text>Click Me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DailyReportModal;

DailyReportModal.defaultProps = {
  userId: "",
  allChallenges: null,
  createChallenge: null,
  createReport: null,
  updateChallenge: null
};

DailyReportModal.propTypes = {
  userId: PropTypes.string,
  allChallenges: PropTypes.object,
  createChallenge: PropTypes.func,
  createReport: PropTypes.func,
  updateChallenge: PropTypes.func
};
