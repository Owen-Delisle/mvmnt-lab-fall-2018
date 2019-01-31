import React from "react";
import { Text, TouchableOpacity, SectionList, View, Image } from "react-native";
import propTypes from "prop-types";
import styles from "./styles";

const thumbnail = {
  Bear: require("../../assets/images/icons/Bear.png"),
  Superbug: require("../../assets/images/icons/Superbug.png"),
  Gargoyle: require("../../assets/images/icons/Gargoyle.png"),
  Flamingo: require("../../assets/images/icons/Flamingo.png"),
  StraightJacket: require("../../assets/images/icons/StraightJacket.png")
};

const Poses = ({ navigation, poses }) => {
  return (
    <SectionList
      renderItem={({ item }) => {
        return (
          <View style={styles.itemContainer} key={item.id}>
            <TouchableOpacity
              style={styles.container}
              onPress={() => {
                navigation.navigate("PosesDetails", {
                  id: item.id,
                  title: item.title,
                  video: item.video
                });
              }}
            >
              <Image style={styles.icon} source={thumbnail[item.icon]} />
              <Text style={styles.title}>{item.title}</Text>
              <Image
                style={styles.arrowIcon}
                source={require("../../assets/images/icons/blackarrow.png")}
              />
            </TouchableOpacity>
          </View>
        );
      }}
      sections={poses}
      keyExtractor={(item, index) => item + index}
    />
  );
};

Poses.propTypes = {
  navigation: propTypes.object.isRequired
};

export default Poses;
