import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputForm from "../components/InputForm";

const Login = () => {
  const onChange = () => {};

  return (
    <View>
      <Text>Inicio de sesion</Text>
      <InputForm label={"Email"} error={""} onChange={onChange} />
      <InputForm label={"Contraseña"} error={""} onChange={onChange} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
