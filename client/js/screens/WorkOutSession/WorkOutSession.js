import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Animated
} from "react-native";
import styles from "./styles";
import Session from "../../components/Session";
import Video from "react-native-video";
import Vid from "../../assets/videos/video.mp4";
import DailyReportModal from "../../components/DailyReportModal";

class WorkoutSession extends Component {
  constructor() {
    super();
    this.state = {
      start: false,
      paused: true,
      buffering: true,
      animated: new Animated.Value(0)
    };
  }

  handleLoadStart = () => {
    this.triggerBufferAnimation();
  };

  triggerBufferAnimation = () => {
    this.loopingAnimation && this.loopingAnimation.stopAnimation();
    this.loopingAnimation = Animated.loop(
      Animated.timing(this.state.animated, {
        toValue: 1,
        duration: 350
      })
    ).start();
  };

  handleBuffer = meta => {
    meta.isBuffering && this.triggerBufferAnimation();

    if (this.loopingAnimation && !meta.isBuffering) {
      this.loopingAnimation.stopAnimation();
    }

    this.setState({
      buffering: meta.isBuffering
    });
  };

  render() {
    cosnt = { session, navigation } = this.props;
    const { buffering } = this.state;
    return (
      <React.Fragment>
        <Video
          volume={1.0}
          source={Vid}
          resizeMode="contain"
          style={{
            height: 250,
            width: Dimensions.get("window").width
          }}
          paused={true}
          start={true}
          rate={1.0}
          onLoad={this.handleLoad}
          onBuffer={this.handleBuffer}
        >
          <TouchableOpacity
            style={
              this.state.paused
                ? styles.buttonContainer
                : styles.buttonContainerFalse
            }
            onPress={() =>
              this.setState({
                paused: !this.state.paused
              })
            }
          >
            <Image
              style={styles.playButton}
              source={require("../../assets/images/icons/playbutton.png")}
            />
          </TouchableOpacity>
        </Video>
        <View style={styles.videoCover}>
          {buffering && (
            <View style={{ flex: 1, justifyContent: "center" }}>
              <ActivityIndicator size="large" color="#1CC6B1" />
            </View>
          )}
        </View>

        <ScrollView>
          {session.allPoses.map(pose => {
            return <Session session={pose} key={pose.id} />;
          })}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => alert("this will go to the modal")}
        >
          {/* <Text style={styles.buttonText}>END SESSION</Text> */}
          <DailyReportModal navigation={this.props.navigation} />
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

export default WorkoutSession;
