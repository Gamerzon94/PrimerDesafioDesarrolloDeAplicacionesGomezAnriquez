import { StyleSheet, Text, View, Pressable, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { useLoginMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { loginSchema } from "../validations/loginSchema";
import InputForm from "../components/InputForm";
import { insertSession } from "../db";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerSignin, result] = useLoginMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
      insertSession({
        email: result.data.email,
        localId: result.data.localId,
        token: result.data.idToken
      })
      .then((result) => console.log(result))
      .catch(err => console.log(err.message))
    }
  }, [result]);

  const onSubmit = () => {
    try {
      loginSchema.validateSync({ password, email });
      triggerSignin({ email, password });
    } catch (err) {
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  return (
    <View>
      <Text>Inicio de sesion</Text>
      <InputForm label={"Email"} error={errorMail} onChange={setEmail} />
      <InputForm
        label={"Contraseña"}
        error={errorPassword}
        onChange={setPassword}
        isSecure={true}
      />
      <Pressable onPress={() => navigation.navigate("Signup")}>
        <Text>Ir al registro</Text>
      </Pressable>
      {result.isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <SubmitButton title={"Login"} onPress={onSubmit} />
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
