import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: globalStyles.container,
  register: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingTop: 30
  },
  input: {
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    margin: 25,
    fontSize: 16
  },
  button: {
    backgroundColor: "white",
    height: 45,
    width: 250,
    borderRadius: 40,
    alignSelf: "center"
  },
  text: {
    textAlign: "center",
    color: "black",
    fontSize: 16,
    marginTop: 12
  },
  backgroundImage: {
    width: width,
    height: height,
    position: "absolute",
    top: -65
  }
});

export default styles;
