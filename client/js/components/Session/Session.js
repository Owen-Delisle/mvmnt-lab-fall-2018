import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";

const Session = ({ session, loadingPercentage, videoDuration, videoId }) => {
  console.log("Session", loadingPercentage);
  console.log("Session Duration", videoDuration);
  const thumbnail = {
    Bear: require("../../assets/images/icons/Bear.png"),
    Superbug: require("../../assets/images/icons/Superbug.png"),
    Gargoyle: require("../../assets/images/icons/Gargoyle.png"),
    Flamingo: require("../../assets/images/icons/Flamingo.png"),
    StraightJacket: require("../../assets/images/icons/StraightJacket.png")
  };
  return (
    <View style={styles.sessionContainer}>
      {session.video === videoId && (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#1DC6C2", "#17C687"]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: `${(loadingPercentage / videoDuration) * 100}%`,
            height: "100%",
            backgroundColor: "green"
          }}
        />
      )}
      <View style={styles.session}>
        <Image source={thumbnail[session.icon]} />
      </View>
      <View style={styles.session}>
        <Text style={styles.title}>{session.title}</Text>
      </View>
      <View style={styles.session}>
        <Text style={styles.duration}>{session.duration}</Text>
      </View>
    </View>
  );
};

export default Session;
