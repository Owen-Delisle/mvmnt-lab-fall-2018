import React, { Fragment } from "react";
import { Text, View, ImageBackground, FlatList } from "react-native";
import styles from "./styles";
import MainPageSessionCard from "../../components/MainPageSessionCard";

const MainPage = ({ session, navigation, challenges }) => {
  _keyExtractor = item => item.id;
  return (
    <Fragment>
      <View style={styles.root}>
        <ImageBackground
          source={require("../../assets/images/BigHeader.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.container}>
            <Text style={styles.text}>GROUND CONTROL</Text>
            <View style={styles.progression}>
              <Text style={styles.progressionDate}>
                {challenges[challenges.length - 1].score.length}/
                {challenges[0].daysBetween}
              </Text>
            </View>
            <Text style={styles.progressionText}>Progress</Text>
          </View>
        </ImageBackground>
        <View style={styles.card}>
          <FlatList
            data={session}
            horizontal={true}
            keyExtractor={this._keyExtractor}
            renderItem={({ item: rowData }) => {
              return (
                <View>
                  <MainPageSessionCard
                    navigation={navigation}
                    session={rowData}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </Fragment>
  );
};

export default MainPage;
