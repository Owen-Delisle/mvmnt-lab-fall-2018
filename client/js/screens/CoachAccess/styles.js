import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";

const styles = StyleSheet.create({
  container: globalStyles.container,
  background: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
    top: -64
  },
  header: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    top: 30
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 40,
    marginTop: 5,
    width: 280,
    color: "white",
    fontSize: 18
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1
  },
  inputContainer: {
    height: 200,
    width: Dimensions.get("window").width,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "column"
  },

  loginForm: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  button: {
    width: 280,
    height: 50,
    backgroundColor: "transparent",
    borderRadius: 30
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15
  }
});

export default styles;
