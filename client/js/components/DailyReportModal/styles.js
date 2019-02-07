import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: globalStyles.container,
  centerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  modalContentContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: height - 120,
    width: width - 60,
    backgroundColor: "white"
  },
  backgroundImage: {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: 60,
    alignSelf: "center",
    backgroundColor: "#9F49E0"
  },
  buttonText: {
    alignSelf: "center",
    color: "black",
    fontWeight: "bold",
    margin: 15
  },
  sliderContainer: {
    width: width - 80,
    alignItems: "center"
  },
  sliderNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  headingContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    height: 250
  },
  heading: {
    fontSize: 20,
    color: "#9E4AE0"
  },
  secondaryHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  tertiaryHeading: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black"
  },
  face: {
    margin: 15
  },
  textInputContainer: {
    width: "85%",
    justifyContent: "space-between",
    height: 140
  },
  textInput: {
    paddingTop: 10,
    height: 60,
    width: "100%",
    borderWidth: 1,
    borderColor: "lightgray"
  },
  buttonText: {
    justifyContent: "center",
    width: 150,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
    alignSelf: "center",
    marginTop: 10
  }
});

export default styles;
