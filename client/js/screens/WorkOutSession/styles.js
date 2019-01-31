import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: globalStyles.container,
  loginForm: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  formFields: {
    color: "white"
  },
  loginButtons: {
    alignSelf: "center",
    color: "white",
    margin: 15
  },
  labels: {
    color: "white"
  },
  fieldLines: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 20,
    marginTop: 5
  },
  button: {
    width: width,
    height: 60,
    alignSelf: "center",
    backgroundColor: "#9F49E0"
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
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  container: {
    flex: 1,
    paddingTop: 250
  },
  videoContainer: {
    overflow: "hidden"
  },
  controls: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 48,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10
  },
  mainButton: {
    marginRight: 15
  },
  duration: {
    color: "#FFF",
    marginLeft: 15
  },
  playButton: {
    height: 50,
    width: 50
  },
  buttonContainer: {
    height: 80,
    width: 80,
    position: "absolute",
    top: 100,
    right: 160
  },
  buttonContainerFalse: {
    display: "none"
  },
  videoCover: {
    height: 80,
    width: 80,
    position: "absolute",
    top: 100,
    right: 150,
    backgroundColor: "transparent"
  }
});

export default styles;
