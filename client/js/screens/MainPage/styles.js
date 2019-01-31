import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: globalStyles.container,
  backgroundImage: {
    width: width,
    height: 280
  },

  root: {
    height: height,
    width: width,
    backgroundColor: "#F2F2F2",
    flexDirection: "column"
  },
  text: {
    color: "white",
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "bold",
    position: "absolute",
    top: 25
  },
  progressionDate: {
    alignSelf: "center",
    fontSize: 18,
    width: 50,
    height: 20,
    paddingLeft: 10
  },
  progression: {
    borderRadius: 65,
    borderWidth: 10,
    borderColor: "white",
    height: 100,
    width: 100,
    backgroundColor: "#1DC6C2",
    justifyContent: "center",
    alignSelf: "center"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  progressionText: {
    alignSelf: "center",
    fontSize: 20,
    width: 90,
    height: 30,
    color: "white",
    fontWeight: "bold",
    alignItems: "center"
  },
  card: {
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 40
  }
});

export default styles;
