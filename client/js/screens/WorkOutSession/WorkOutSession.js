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
import DailyReportModal from "../../components/DailyReportModal";
import YouTube from "react-native-youtube";

class WorkoutSession extends Component {
  constructor() {
    super();
    this.state = {
      workoutCompleted: false,
      paused: true,
      buffering: true,
      animated: new Animated.Value(0),
      videoList: [],
      videoQueue: 0,
      loadingPercentage: 0,
      videoDuration: 0
    };
  }

  componentDidMount() {
    this.props.navigation.getParam("poses").map(pose => {
      this.setState({ videoList: this.state.videoList.push(pose.video) });
    });
  }

  render() {
    const { navigation } = this.props;
    console.log(this.state.loadingPercentage, this.state.videoDuration);
    return (
      <React.Fragment>
        <YouTube
          videoId={navigation.getParam("videos")[this.state.videoQueue]}
          play={false}
          fullscreen={false}
          loop={false}
          apiKey={"AIzaSyBmwnl_iMRbP6xN8nWfzod2A0-mLCfh52s"}
          onReady={e => this.setState({ isReady: true })}
          rel={false}
          onChangeState={e => {
            this.setState({ status: e.state }),
              e.state === "ended" &&
                this.state.videoQueue <
                  navigation.getParam("videos").length - 1 &&
                this.setState({ videoQueue: this.state.videoQueue + 1 });

            e.state === "ended" &&
              this.state.videoQueue ===
                navigation.getParam("videos").length - 1 &&
              this.setState({ workoutCompleted: true });

            e.state === "ended" && this.setState({ loadingPercentage: 0 });
          }}
          onChangeQuality={e => this.setState({ error: e.error })}
          style={{
            alignSelf: "stretch",
            height: 250
          }}
          onProgress={e => {
            this.setState({ loadingPercentage: e.currentTime });
            this.setState({ videoDuration: e.duration });
          }}
        />
        <ScrollView>
          {navigation.getParam("poses").map(pose => {
            return (
              <Session
                session={pose}
                key={pose.id}
                loadingPercentage={this.state.loadingPercentage}
                videoDuration={this.state.videoDuration}
                videoId={navigation.getParam("videos")[this.state.videoQueue]}
              />
            );
          })}
        </ScrollView>
        <TouchableOpacity style={styles.button}>
          <DailyReportModal
            navigation={this.props.navigation}
            workoutCompleted={this.state.workoutCompleted}
            poses={navigation.getParam("poses")}
          />
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

export default WorkoutSession;
