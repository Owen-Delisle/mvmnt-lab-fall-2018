import { StyleSheet, Dimensions } from "react-native";
import { globalStyles, colors } from "../../config/styles";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: width - 40,
    height: 450,
    padding: 30,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 90,
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 10
  },
  cardHeading: {
    alignItems: "center"
  },
  heading: {
    fontSize: 20,
    color: "#9E4AE0"
  },
  score: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
    paddingRight: 7
  },
  smallHeading: {
    width: 120,
    textAlign: "center",
    paddingLeft: 7
  },
  progressBar: {
    width: 250,
    height: 10,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "#AAAAAA"
  },
  button: {
    width: 300,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1
  },
  loginButtons: {
    alignSelf: "center",
    color: "black",
    margin: 15
  },
  scoresText: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  scoreNumbers: {
    flexDirection: "row",
    width: 250,
    height: 15,
    justifyContent: "space-between"
  }
});

export default styles;
