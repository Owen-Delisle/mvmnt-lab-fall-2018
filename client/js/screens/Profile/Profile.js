import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import React, { Fragment } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";

const Profile = ({
  navigation,
  dataProfile,
  logout,
  id,
  allChallenges,
  coachId
}) => {
  return (
    <View style={styles.profileWrapper}>
      <View style={styles.profileHeader}>
        <View style={styles.headerItems}>
          <Image
            source={require("../../assets/images/placeholder.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.headerItemsText}>{` ${
            dataProfile.User.firstname
          } ${dataProfile.User.lastname}`}</Text>
        </View>

        <View style={styles.headerItems}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#1DC6C2", "#17C687"]}
            style={styles.progression}
          >
            <View style={styles.progressionTextBox}>
              {allChallenges &&
                allChallenges.map(challenge => {
                  if (
                    challenge.startDate <= new Date().toISOString() &&
                    challenge.endDate >= new Date().toISOString()
                  ) {
                    return (
                      <Text style={styles.progressionText} key={challenge.id}>
                        {challenge.score.length}/{challenge.daysBetween}
                      </Text>
                    );
                  }
                })}
            </View>
          </LinearGradient>
          <Text style={styles.headerItemsText}>Progress</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.profileOptions}
        onPress={() => {
          navigation.navigate("DailyReports");
        }}
      >
        <Text style={styles.profileOptionsText}>Daily Reports </Text>
        <FontAwesome5 name={"chevron-right"} size={20} solid />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.profileOptions}
        onPress={() => {
          navigation.navigate("CompletedChallenges", {
            userId: id
          });
        }}
      >
        <Text style={styles.profileOptionsText}>Completed Challenges</Text>
        <FontAwesome5 name={"chevron-right"} size={20} solid />
      </TouchableOpacity>
      {coachId === undefined && (
        <Fragment>
          <TouchableOpacity
            style={styles.reminders}
            onPress={() => {
              navigation.navigate("Reminders");
            }}
          >
            <Text style={styles.profileOptionsText}>Reminders</Text>
            <FontAwesome5 name={"chevron-right"} size={20} solid />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.about}
            onPress={() => {
              navigation.navigate("About");
            }}
          >
            <Text style={styles.profileOptionsText}>About</Text>
            <FontAwesome5 name={"chevron-right"} size={20} solid />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => {
              logout(id);
            }}
          >
            <Text style={styles.buttonText}>LOGOUT</Text>
          </TouchableOpacity>
        </Fragment>
      )}
    </View>
  );
};
export default Profile;

Profile.defaultProps = {
  allChallenges: null
};

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
  dataProfile: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};
