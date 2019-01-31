import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Slider,
  Modal
} from "react-native";
import styles from "./styles";

class WorkModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.workModal,
      work: 5
    };
  }

  change(work) {
    this.props.setWork(parseFloat(work));
    this.setState({
      work: work
    });
  }

  render() {
    const { work } = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.workModal}
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
              <Text style={styles.heading}>DAY {this.props.days + 1}</Text>
              <Image source={require("../../assets/images/checkmark.png")} />
              <Text style={styles.secondaryHeading}>Well Done!</Text>
            </View>

            <View style={styles.sliderContainer}>
              <Text style={styles.tertiaryHeading}>How hard did you work?</Text>
              <Slider
                style={{ width: "100%" }}
                step={1}
                maximumValue={10}
                minimumValue={0}
                onValueChange={this.change.bind(this)}
                value={work}
                disabled={false}
                minimumTrackTintColor={"#C7C7CC"}
                maximumTrackTintColor={"#C7C7CC"}
              />
              <View style={styles.sliderNumber}>
                <Text>0</Text>
                <Text>10</Text>
              </View>
              {work <= 3 ? (
                <Text>Struggled</Text>
              ) : (work > 3) & (work < 7) ? (
                <Text>Moderate Challenge</Text>
              ) : (
                <Text>I did my best!</Text>
              )}
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.toggleWorkModal();
                this.props.togglePainModal();
              }}
            >
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Modal>
    );
  }
}

export default WorkModal;
