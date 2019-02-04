import React from "react";
import { Form, Field } from "react-final-form";
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  Alert,
  Button
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { UpdateUserMutation, QueryUser } from "../../apollo/";
import ImagePicker from "react-native-image-picker";

class EditProfileForm extends React.Component {
  handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
      console.log("Response", response);
    });
  };
  render() {
    const { id, navigation, user } = this.props;

    return (
      <View style={styles.editprofilewrapper}>
        <React.Fragment>
          <Image
            source={require("../../assets/images/placeholder.jpg")}
            style={styles.avatar}
          />
          <TouchableOpacity
            style={styles.profileEditButton}
            onPress={this.handleChoosePhoto}
          >
            <Text>EDIT </Text>
          </TouchableOpacity>
        </React.Fragment>

        <Mutation mutation={UpdateUserMutation}>
          {updateUser => {
            return (
              <Form
                onSubmit={async values => {
                  try {
                    await updateUser({
                      variables: {
                        id: id,
                        firstname: values.firstname,
                        lastname: values.lastname,
                        email: values.email,
                        password:
                          values.newPassword === values.verifyPassword
                            ? values.verifyPassword
                            : Alert.alert(
                                "Your new password doesn't match",
                                "Please re-enter your new password",
                                [{ text: "Got it" }]
                              )
                      },
                      refetchQueries: [
                        {
                          query: QueryUser,
                          variables: { id }
                        },

                        Alert.alert(
                          "Done!",
                          "Your information was updated successfully.",
                          [
                            {
                              text: "Go Back",
                              onPress: () => navigation.navigate("Profile")
                            }
                          ]
                        )
                      ]
                    });
                  } catch (error) {
                    <Text>{error}</Text>;
                  }
                }}
              >
                {({ handleSubmit, pristine }) => (
                  <View>
                    <View style={styles.formWrapper}>
                      <Field name="firstname">
                        {({ input }) => (
                          <TextInput
                            {...input}
                            style={styles.editProfileInputs}
                            placeholder={user ? user.firstname : "First name"}
                            type="text"
                          />
                        )}
                      </Field>

                      <Field name="lastname">
                        {({ input }) => (
                          <TextInput
                            {...input}
                            style={styles.editProfileInputs}
                            placeholder={user ? user.lastname : "Last name"}
                            type="text"
                          />
                        )}
                      </Field>

                      <Field name="email">
                        {({ input }) => (
                          <TextInput
                            {...input}
                            style={styles.editProfileInputs}
                            placeholder={user ? user.email : "email@email.com"}
                            autoCapitalize="none"
                            type="text"
                          />
                        )}
                      </Field>

                      <Field name="OldPassword">
                        {({ input }) => (
                          <View>
                            <TextInput
                              {...input}
                              secureTextEntry={true}
                              autoCapitalize="none"
                              style={styles.editProfileInputs}
                              placeholder="Old Password"
                              type="text"
                            />
                          </View>
                        )}
                      </Field>

                      <Field name="NewPassword">
                        {({ input }) => (
                          <View>
                            <TextInput
                              {...input}
                              secureTextEntry={true}
                              autoCapitalize="none"
                              style={styles.editProfileInputs}
                              placeholder="New Password"
                              type="text"
                            />
                          </View>
                        )}
                      </Field>

                      <Field name="VerifyPassword">
                        {({ input }) => (
                          <View>
                            <TextInput
                              {...input}
                              secureTextEntry={true}
                              autoCapitalize="none"
                              style={styles.editProfileInputs}
                              placeholder="Verify Password"
                              type="text"
                            />
                          </View>
                        )}
                      </Field>
                    </View>

                    <View style={styles.editSubmitButton}>
                      <Button
                        disabled={pristine}
                        color="black"
                        title="DONE"
                        onPress={() => {
                          handleSubmit();
                        }}
                      />
                    </View>
                  </View>
                )}
              </Form>
            );
          }}
        </Mutation>
      </View>
    );
  }
}

export default EditProfileForm;

EditProfileForm.propTypes = {
  navigation: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};
