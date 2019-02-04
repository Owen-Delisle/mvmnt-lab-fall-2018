import React, { Component } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import styles from "./styles";
import Session from "../Session/Session";
import moment from "moment";

class MainPageSessionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLight: true,
      videoList: []
    };
  }

  render() {
    const { session, navigation } = this.props;
    return (
      <View style={styles.card} key={session.id}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                showLight: true
              })
            }
          >
            <Text
              style={
                this.state.showLight ? styles.lightHeader : styles.darkHeader
              }
            >
              LIGHT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                showLight: false
              })
            }
          >
            <Text
              style={
                !this.state.showLight ? styles.lightHeader : styles.darkHeader
              }
            >
              HEAVY
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sessionContainer}>
          <View>
            <Text style={styles.day}>
              DAY
              {session.day}
            </Text>
          </View>
          {this.state.showLight ? (
            <ScrollView>
              {session.poses.map(pose => {
                return <Session session={pose} key={pose.id} />;
              })}
            </ScrollView>
          ) : (
            <ScrollView>
              {session.poses.map(pose => {
                return <Session session={pose} key={pose.id} />;
              })}
            </ScrollView>
          )}

          <TouchableOpacity
            onPress={() => {
              console.log(session.poses);
              videos = [];
              session.poses.map(pose => {
                videos.push(pose.video);
              });
              console.log("PAANINA", videos);
              navigation.navigate("WorkoutSession", {
                poses: session.poses,
                videos: videos
              });
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MainPageSessionCard;
