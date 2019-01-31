import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
var width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: globalStyles.container,
  card: {
    backgroundColor: "white",
    width: width - 40,
    height: 380,
    marginLeft: 20,
    marginRight: 10,
    marginTop: 170,
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    width: 100
  },
  headerContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    height: 38,
    width: width - 44,
    backgroundColor: "#D8D8D8",
    justifyContent: "center"
  },
  lightHeader: {
    fontSize: 16,
    justifyContent: "center",
    width: 165,
    textAlign: "center",
    height: 38,
    backgroundColor: "white",
    paddingTop: 10
  },
  darkHeader: {
    fontSize: 16,
    justifyContent: "center",
    width: 165,
    textAlign: "center",
    height: 38,
    paddingRight: 10,
    backgroundColor: "#D8D8D8",
    paddingTop: 10
  },
  sessionContainer: {
    width: 300,
    height: 370
  },
  day: {
    fontSize: 25,
    color: "#9F49E0",
    alignSelf: "center",
    paddingTop: 10
  },
  button: {
    width: 280,
    height: 40,
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "black"
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 18,
    marginTop: 10
  },
  light: {
    backgroundColor: "white",
    width: 160
  },
  heavy: {
    backgroundColor: "white",
    width: 160
  },
  text: {
    marginTop: 20
  }
});

export default styles;
