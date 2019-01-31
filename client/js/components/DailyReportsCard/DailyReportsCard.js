import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import moment from "moment";
import ProgressBar from "../ProgressBar";
import { colors } from "../../config/styles";

const DailyReportsCard = ({ data }) => {
  return (
    <View style={styles.card} key={data.id}>
      <View style={styles.cardHeading}>
        <Text style={styles.heading}>
          {moment(data.date).format("MMM DD, YYYY")}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.image}>
          <Image source={require("../../assets/images/icons/Bear.png")} />
          <Text>6 min</Text>
        </View>
        <View style={styles.image}>
          <Image source={require("../../assets/images/icons/Flamingo.png")} />
          <Text>7 min</Text>
        </View>
        <View style={styles.image}>
          <Image source={require("../../assets/images/icons/Gargoyle.png")} />
          <Text>7 min</Text>
        </View>
      </View>
      <View style={styles.scoresText}>
        <Text style={styles.smallHeading}>SESSION SCORE</Text>
        <ProgressBar color={colors.green} score={[data.work]} />
      </View>
      <View style={styles.scoresText}>
        <Text style={styles.smallHeading}>PAIN METER</Text>
        <ProgressBar color={colors.purple} score={[data.pain]} />
      </View>
      <View style={styles.scoresText}>
        <Text style={styles.smallHeading}>DESCRIBE YOUR PAIN</Text>
        <Text>{data.painDescription}</Text>
      </View>
      <View style={styles.scoresText}>
        <Text style={styles.smallHeading}>NOTES</Text>
        <Text>{data.notes}</Text>
      </View>
    </View>
  );
};

export default DailyReportsCard;
