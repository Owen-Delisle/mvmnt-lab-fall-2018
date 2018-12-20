import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: globalStyles.container,
  itemContainer: {
    width: width,
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    flexDirection: "row",
    padding: 0,
    margin: 0,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center",
    margin: 20,
    alignSelf: "center"
  },

  container: {
    flexDirection: "row",
    width: width
  },
  icon: {
    justifyContent: "flex-start",
    alignContent: "center",
    margin: 20
  },
  arrowIcon: {
    position: "absolute",
    right: 15,
    top: 35
  }
});

export default styles;
