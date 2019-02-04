import React, { Component } from "react";
import {
  Text,
  ScrollView,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  TouchableHighlight
} from "react-native";
import styles from "./styles";
import YouTube from "react-native-youtube";
// import Video from "react-native-video";
// import Vid from "../../assets/videos/video.mp4";

//AIzaSyBmwnl_iMRbP6xN8nWfzod2A0-mLCfh52s

const apiKey = "AIzaSyBmwnl_iMRbP6xN8nWfzod2A0-mLCfh52s";
const channelId = "UCjXfkj5iapKHJrhYfAF9ZGg";
const results = 5;

const thumbnail = {
  Bear: require("../../assets/images/icons/Bear.png"),
  Superbug: require("../../assets/images/icons/Superbug.png"),
  Gargoyle: require("../../assets/images/icons/Gargoyle.png"),
  Flamingo: require("../../assets/images/icons/Flamingo.png"),
  StraightJacket: require("../../assets/images/icons/StraightJacket.png")
};

class PosesDetails extends Component {
  constructor() {
    super();
    this.state = {
      start: false,
      paused: true,
      buffering: true,
      animated: new Animated.Value(0),
      data: []
    };
  }

  componentDidMount() {
    fetch(
      `https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&channelId=${channelId}&part=snippet, 
      id&order=date&maxResults=${results}`
    )
      .then(res => res.json())
      .then(res => {
        const videoId = [];
        res.items.forEach(item => {
          videoId.push(item);
        });
        this.setState({
          data: videoId
        });
      })
      .catch(error => {
        console.log(error);
      });
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
          <YouTube
            videoId={posesDetails.video}
            play={true}
            fullscreen={false}
            loop={false}
            apiKey={apiKey}
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ error: e.error })}
            style={{ alignSelf: "stretch", height: 250 }}
          />
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
