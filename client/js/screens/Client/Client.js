import React from "react";
import { View, Text, TouchableOpacity, SectionList, Image } from "react-native";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";

const Client = ({ client, navigation }) => {
  return (
    <SectionList
      renderItem={({ item }) => {
        console.log(item.id);
        return (
          <ScrollView>
            <View style={styles.itemContainer} key={item.id}>
              <TouchableOpacity
                style={styles.container}
                onPress={() => {
                  console.log(item.id);
                  navigation.navigate("Profile", {
                    userId: item.id
                  });
                }}
              >
                <Image
                  style={styles.icon}
                  source={require("../../assets/images/icons/Bear.png")}
                />
                <Text style={styles.name}>
                  {item.firstname} {item.lastname}
                </Text>
                <Image
                  style={styles.arrowIcon}
                  source={require("../../assets/images/blackarrow.png")}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        );
      }}
      sections={client}
      keyExtractor={(item, index) => item + index}
    />
  );
};

export default Client;
