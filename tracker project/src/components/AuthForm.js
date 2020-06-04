import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Spacer from "./Spacer";
const AuthForm = ({
  headerText,
  errorMessage,
  onSubmit,
  submitButtonTitle,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer />
      <Input
        label="Email"
        value={email}
        style={{ paddingTop: 20 }}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Spacer>
        <Button
          title={submitButtonTitle}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({ error: { fontSize: 16, color: "red" } });
export default AuthForm;
