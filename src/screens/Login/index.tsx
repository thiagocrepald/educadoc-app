import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  ContainerTitle,
  Title,
  SubTitle,
  ContainerForm,
  TextForgoutPassword,
  ButtonForgout,
  ContainerPassword,
  ButtonIcon,
  ContainerButton,
} from "./styles";

import { Controlled } from "../../components/Form/Controlled";
import { StackParamsList } from "../../routes/auth.routes";
import { Button } from "../../components/Button";

import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Octicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { SignInFirebase, AuthContext } from "../../context/AuthContext";

export function Login() {
  const { singIn } = useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const { control, handleSubmit } = useForm<SignInFirebase>();

  const [visiblePassword, setVisiblePassword] = useState(false);

  async function handleLogin(data: SignInFirebase) {
    if (data.email === undefined || data.password === undefined) {
      Toast.show({
        type: "error",
        text1: "Preenche seus dados!",
        position: "top",
        topOffset: 70,
      });
    } else await singIn(data);
  }

  return (
    <Container>
      <ContainerTitle>
        <Title>Vamos Entrar</Title>
        <SubTitle>
          Bem-vindo de volta {"\n"}
          faça o seu login aqui!
        </SubTitle>
      </ContainerTitle>

      <ContainerForm>
        <Controlled
          name="email"
          control={control}
          placeholder="E-mail ou Telefone"
          placeholderTextColor="#fff"
        />
        <ContainerPassword>
          <Controlled
            name="password"
            control={control}
            placeholder="Senha"
            placeholderTextColor="#fff"
            secureTextEntry={!visiblePassword}
          />
          <ButtonIcon onPress={() => setVisiblePassword(!visiblePassword)}>
            {visiblePassword ? (
              <Octicons name="eye" size={20} color="#fff" />
            ) : (
              <Octicons name="eye-closed" size={20} color="#fff" />
            )}
          </ButtonIcon>
        </ContainerPassword>

        <ButtonForgout onPress={() => navigation.navigate("Forgout")}>
          <TextForgoutPassword>Esqueceu sua senha?</TextForgoutPassword>
        </ButtonForgout>

        <ContainerButton>
          <Button
            type="cadaster"
            title="Entrar"
            onPress={handleSubmit(handleLogin)}
          />
        </ContainerButton>
      </ContainerForm>

      <Toast />
    </Container>
  );
}
