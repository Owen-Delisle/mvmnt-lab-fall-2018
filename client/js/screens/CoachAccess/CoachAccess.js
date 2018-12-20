import React from "react";
import { Form, Field } from "react-final-form";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  StatusBar
} from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";

const required = value => (value ? undefined : "* Required Field");

const CoachAccess = ({ login, storeSessionToken }) => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={styles.background}
        source={require("../../assets/images/background.png")}
      >
        <Text style={styles.header}>COACH ACCESS</Text>
        <View style={styles.container}>
          <View style={styles.loginForm}>
            <Form
              onSubmit={async values => {
                try {
                  let response = await login({ variables: values });
                  storeSessionToken(
                    response.data.authenticateUser.token,
                    response.data.authenticateUser.id
                  );
                } catch (error) {
                  alert.alert(
                    "Wrong email or password",
                    "please re-enter your username or password",
                    [{ text: "Got it" }]
                  );
                }
              }}
            >
              {({ handleSubmit, values }) => (
                <View style={styles.formContainer}>
                  <Field name="email" validate={required}>
                    {({ input, meta }) => (
                      <TextInput
                        {...input}
                        placeholder="Email"
                        style={styles.input}
                        placeholderTextColor="white"
                        autoCapitalize="none"
                      />
                    )}
                  </Field>
                  <Field name="password" validate={required}>
                    {({ input, meta }) => (
                      <TextInput
                        {...input}
                        placeholder="Password"
                        style={styles.input}
                        placeholderTextColor="white"
                        autoCapitalize="none"
                      />
                    )}
                  </Field>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#1DC6C2", "#17C687"]}
                    style={styles.button}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        handleSubmit(values);
                      }}
                    >
                      <Text style={styles.buttonText}>LOG IN</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              )}
            </Form>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CoachAccess;
