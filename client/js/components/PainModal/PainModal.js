import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Slider,
  Modal,
  TextInput
} from "react-native";
import styles from "./styles";
import moment from "moment";

class PainModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.painModal,
      allChallenges: [],
      date: new Date().toISOString(),
      pain: 5,
      score: 0,
      work: 5,
      painDescription: "",
      notes: ""
    };
  }
  change(pain) {
    this.setState(() => {
      return {
        pain: parseFloat(pain)
      };
    });
  }

  getDaysBetween(dateA, dateB) {
    let startDate = moment(dateA);
    let endDate = moment(dateB);
    let days = endDate.diff(startDate, "days");
    return days;
  }

  render() {
    const { pain } = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.painModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <ImageBackground
          source={require("../../assets/images/modalBackground.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.modalContentContainer}>
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>PAIN METER</Text>

              {pain <= 3 ? (
                <Image
                  source={require("../../assets/images/happyface.png")}
                  style={styles.face}
                />
              ) : (pain > 3) & (pain < 7) ? (
                <Image
                  source={require("../../assets/images/distressingface.png")}
                  style={styles.face}
                />
              ) : (
                <Image
                  source={require("../../assets/images/sadface.png")}
                  style={styles.face}
                />
              )}

              <View style={styles.sliderContainer}>
                <Slider
                  style={{ width: "100%" }}
                  step={1}
                  maximumValue={10}
                  minimumValue={0}
                  onValueChange={this.change.bind(this)}
                  value={pain}
                  disabled={false}
                  minimumTrackTintColor={"#C7C7CC"}
                  maximumTrackTintColor={"#C7C7CC"}
                />
                <View style={styles.sliderNumber}>
                  <Text>0</Text>
                  <Text>10</Text>
                </View>
                {pain <= 3 ? (
                  <Text>No Pain</Text>
                ) : (pain > 3) & (pain < 7) ? (
                  <Text>Distressing</Text>
                ) : (
                  <Text>Excrusciating</Text>
                )}
              </View>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Describe pain"
                onChangeText={painDescription =>
                  this.setState({ painDescription })
                }
                multiline={true}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Additional Notes"
                onChangeText={notes => this.setState({ notes })}
                multiline={true}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.createReport({
                  variables: {
                    date: new Date().toISOString(),
                    pain: this.state.pain,
                    score: this.state.score,
                    work: this.props.work,
                    userId: this.props.userId,
                    painDescription: this.state.painDescription,
                    notes: this.state.notes
                  }
                });
                this.props.allChallengeResponse.allChallenges.map(challenge => {
                  if (
                    challenge.startDate <= new Date().toISOString() &&
                    challenge.endDate >= new Date().toISOString()
                  ) {
                    this.scores = challenge.score;
                    this.scores.push(this.props.work);
                    this.days = this.scores.length;
                    this.props.updateChallenge({
                      variables: {
                        id: challenge.id,
                        score: this.scores
                      }
                    });
                  }
                });

                if (
                  this.props.allChallengeResponse.allChallenges.length === 0 ||
                  this.props.allChallengeResponse.allChallenges[
                    this.props.allChallengeResponse.allChallenges.length - 1
                  ].endDate < new Date().toISOString()
                ) {
                  this.props.createChallenge({
                    variables: {
                      endDate: moment(new Date()).add(1, "M"),
                      startDate: new Date().toISOString(),
                      score: [this.props.work],
                      userId: this.props.userId,
                      daysBetween: this.getDaysBetween(
                        new Date().toISOString(),
                        moment(new Date().toISOString()).add(1, "M")
                      )
                    }
                  });
                }
                this.props.togglePainModal();
                this.props.navigation.navigate("Main");
              }}
            >
              <Text style={styles.buttonText}>COMPLETE</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Modal>
    );
  }
}

export default PainModal;
