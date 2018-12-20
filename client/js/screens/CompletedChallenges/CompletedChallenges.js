import React from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import { ImageBackground } from "react-native";
import ChallengesCard from "../../components/ChallengesCard";

const CompletedChallenges = ({ data }) => {
  _keyExtractor = item => item.id;
  return (
    <ImageBackground
      source={require("../../assets/images/BigHeader.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <FlatList
          data={data.allChallenges}
          horizontal={true}
          keyExtractor={this._keyExtractor}
          renderItem={({ item: rowData }) => {
            return <ChallengesCard data={rowData} />;
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default CompletedChallenges;
