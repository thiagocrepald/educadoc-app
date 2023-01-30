import React, { useContext } from "react";

import {
  Container,
  ContainerProfile,
  Title,
  Name,
  ContainerBody,
} from "./styles";

import { Controlled } from "../../components/Form/Controlled";
import { AuthContext } from "../../context/AuthContext";
import { CheckBox } from "./Components/CheckBox";
import { Button } from "../../components/Button";

import { useForm } from "react-hook-form";
import { Image } from "react-native";

export function Profile() {
  const { control } = useForm();
  const { user, signOut } = useContext(AuthContext);

  console.log("user", user);
  return (
    <Container>
      <ContainerProfile>
        <Title>Meus dados</Title>
        <Image
          source={{ uri: user.photo }}
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
          }}
        />
        <Name>{user?.name}</Name>
      </ContainerProfile>

      <ContainerBody>
        <Controlled
          name="name"
          control={control}
          placeholder={user.name}
          placeholderTextColor="#3C3C3C"
        />
        <Controlled
          name="E-mail"
          control={control}
          placeholder={user.email}
          placeholderTextColor="#3C3C3C"
        />
        <Controlled
          name="cpf"
          control={control}
          placeholder={user.cpf}
          placeholderTextColor="#3C3C3C"
        />

        <CheckBox />

        {user.status === "estudante" ? (
          <Button
            style={{ marginTop: 16 }}
            title="Desconectar"
            onPress={() => signOut()}
          />
        ) : null}
      </ContainerBody>
    </Container>
  );
}
