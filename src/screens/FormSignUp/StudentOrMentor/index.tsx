import React, { useState } from "react";

import {
  Container,
  TitleProgess,
  Title,
  ContainerBody,
  ContainerButton,
  ContainerValidation,
  Buttonspecify,
  Textspecify,
} from "./styles";

import { Button } from "../../../components/Button";
import { StackParamsList } from "../../../routes/auth.routes";
import { NavigateProps } from "../../../utils/navigateProps";

import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type FormCategory = {
  category: string;
  status: any;
  My: string
};

export function StudentOrMentor() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()
  const { handleSubmit } = useForm<FormCategory>();

  const [status, setStatus] = useState<any>("not");

  function handleNext() {
    navigation.navigate("My", status);
  }

  return (
    <Container>
      <TitleProgess>PASSO 1 DE 5</TitleProgess>

      <Title>Vamos começar?</Title>

      <ContainerBody>
        <ContainerValidation>
          <Buttonspecify onPress={() => setStatus("mentor")}>
            {status === "mentor" ? (
              <Textspecify style={{ color: "#FDFF6C" }}>
                Quero ser mentor
              </Textspecify>
            ) : (
              <Textspecify>Quero ser mentor</Textspecify>
            )}
          </Buttonspecify>
          <Buttonspecify onPress={() => setStatus("estudante")}>
            {status === "estudante" ? (
              <Textspecify style={{ color: "#FDFF6C" }}>
                Quero ter acesso à mentorias
              </Textspecify>
            ) : (
              <Textspecify>Quero ter acesso à mentorias</Textspecify>
            )}
          </Buttonspecify>
        </ContainerValidation>

        <ContainerButton>
          {status === 'not' ? (
            <Button
              style={{opacity: 50}}
              disabled
              type="login"
              title="Escolha"
            />
          ) : (
            <Button
              type="login"
              title="Próximo"
              onPress={handleSubmit(handleNext)}
            />
          )}
        </ContainerButton>
      </ContainerBody>
    </Container>
  );
}
