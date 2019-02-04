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
      start: false,
      paused: true,
      buffering: true,
      animated: new Animated.Value(0),
      videoList: [],
      videoQueue: 0
    };
  }

  componentDidMount() {
    this.props.navigation.getParam("poses").map(pose => {
      this.setState({ videoList: this.state.videoList.push(pose.video) });
      console.log("HELLER", this.state.videoList);
    });
  }

  render() {
    const { navigation } = this.props;
    console.log("KELLER", this.state.videoList);
    return (
      <React.Fragment>
        <YouTube
          videoId={navigation.getParam("videos")[this.state.videoQueue]}
          play={true}
          fullscreen={false}
          loop={false}
          apiKey={"AIzaSyBmwnl_iMRbP6xN8nWfzod2A0-mLCfh52s"}
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => {
            this.setState({ status: e.state }),
              e.state === "ended" &&
                this.state.videoQueue <
                  navigation.getParam("videos").length - 1 &&
                this.setState({ videoQueue: this.state.videoQueue + 1 });
          }}
          onChangeQuality={e => this.setState({ error: e.error })}
          style={{ alignSelf: "stretch", height: 250 }}
        />
        <ScrollView>
          {navigation.getParam("poses").map(pose => {
            return <Session session={pose} key={pose.id} />;
          })}
        </ScrollView>
        <TouchableOpacity style={styles.button}>
          <DailyReportModal navigation={this.props.navigation} />
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

export default WorkoutSession;
