import React from "react";
import { View, FlatList, ImageBackground, Text } from "react-native";
import styles from "./styles";
import DailyReportsCard from "../../components/DailyReportsCard";

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
        data={data.allDailyReports.reverse()}
        horizontal={true}
        renderItem={({ item: rowData }) => {
          return <DailyReportsCard data={rowData} />;
        }}
      />
    </View>
  );
};

export default DailyReports;
