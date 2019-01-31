import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const Session = ({ session }) => {
  const thumbnail = {
    Bear: require("../../assets/images/icons/Bear.png"),
    Superbug: require("../../assets/images/icons/Superbug.png"),
    Gargoyle: require("../../assets/images/icons/Gargoyle.png"),
    Flamingo: require("../../assets/images/icons/Flamingo.png"),
    StraightJacket: require("../../assets/images/icons/StraightJacket.png")
  };
  return (
    <View style={styles.sessionContainer}>
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
