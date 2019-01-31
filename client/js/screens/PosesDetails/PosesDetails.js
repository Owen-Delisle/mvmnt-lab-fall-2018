import React, { Component } from "react";
import {
  Text,
  ScrollView,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Animated
} from "react-native";
import styles from "./styles";
import Video from "react-native-video";
import Vid from "../../assets/videos/video.mp4";

const thumbnail = {
  Bear: require("../../assets/images/icons/Bear.png"),
  Superbug: require("../../assets/images/icons/Superbug.png"),
  Gargoyle: require("../../assets/images/icons/Gargoyle.png"),
  Flamingo: require("../../assets/images/icons/Flamingo.png")
};

class PosesDetails extends Component {
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
    cosnt = { posesDetails } = this.props;
    const { buffering } = this.state;
    return (
      <View>
        <ScrollView>
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
              style={{ backgroundColor: "pink" }}
              onPress={() => alert("hello")}
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
          <View style={styles.container}>
            <Image style={styles.icon} source={thumbnail[posesDetails.icon]} />
            <Text style={styles.title}>{posesDetails.title}</Text>
          </View>
          <Text style={styles.description}>{posesDetails.description}</Text>
        </ScrollView>
      </View>
    );
  }
}

export default PosesDetails;
