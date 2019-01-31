import React from "react";
import { View, FlatList, ImageBackground, Text } from "react-native";
import styles from "./styles";
import DailyReportsCard from "../../components/DailyReportsCard";

const days = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31
];

const DailyReports = ({ data }) => {
  _keyExtractor = item => item.id;
  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/BigHeader.png")}
        style={styles.backgroundImage}
      />

      <FlatList
        keyExtractor={this._keyExtractor}
        data={days}
        horizontal={true}
        renderItem={({ item: days }) => {
          return (
            <View style={styles.banner}>
              <Text style={styles.days}>{days}</Text>
            </View>
          );
        }}
      />

      <FlatList
        keyExtractor={this._keyExtractor}
        data={data.allDailyReports}
        horizontal={true}
        renderItem={({ item: rowData }) => {
          return <DailyReportsCard data={rowData} />;
        }}
      />
    </View>
  );
};

export default DailyReports;
