import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: globalStyles.container,
  sessionContainer: {
    width: width,
    height: 110,
    flexDirection: "row",
    justifyContent: "space-evenly",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#D8D8D8"
  },
  session: {
    justifyContent: "center",
    width: 90
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  duration: {
    textAlign: "right"
  }
});

export default styles;
