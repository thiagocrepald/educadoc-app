import React, { useContext } from "react";

import {
  Container,
  TitleProgess,
  Title,
  ContainerBody,
  ContainerButton,
} from "./styles";

import { Button } from "../../../components/Button";
import { Controlled } from "../../../components/Form/Controlled";
import { StackParamsList } from "../../../routes/auth.routes";
import { schemaAcess } from "../../../utils/validationForm";

import { useForm } from "react-hook-form";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext, SignUpFirebase } from "../../../context/AuthContext";

type RouteDetailParams = {
  Acess: {
    crm: string;
    estudante?: boolean;
    estadocrm: string;
    dataFormatura: string;
    universidade?: string | null;
    estado?: string | null;
  };
};

type AcessRouteProps = RouteProp<RouteDetailParams, "Acess">;

export function Acess() {
  const { signUp } = useContext(AuthContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const route = useRoute<AcessRouteProps>();
  const dataForm = route.params;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFirebase>({
    resolver: yupResolver(schemaAcess),
  });

  function handleNext(acess: SignUpFirebase) {
    if (signUp) {
      const _OBJECT = {
        acess: acess,
        dataForm: dataForm,
      };
      const _cadasterUser = Object.assign({}, _OBJECT.acess, _OBJECT.dataForm);
      signUp(_cadasterUser);
      navigation.navigate("TermsAndPrivacy");
    } else return;
  }

  return (
    <Container>
      <TitleProgess>PASSO 4 DE 5</TitleProgess>

      <Title>Dados do acesso</Title>

      <ContainerBody>
        <Controlled
          type="phone"
          name="celular"
          control={control}
          placeholder="Celular"
          placeholderTextColor="#fff"
          error={errors.celular}
        />
        <Controlled
          name="email"
          control={control}
          placeholder="Seu e-mail"
          placeholderTextColor="#fff"
          error={errors.email}
        />
        <Controlled
          name="senha"
          control={control}
          placeholder="Senha"
          placeholderTextColor="#fff"
          error={errors.senha}
          secureTextEntry={true}
        />
        <Controlled
          name="confirm_senha"
          control={control}
          placeholder="Repetir senha"
          placeholderTextColor="#fff"
          error={errors.confirm_senha}
          secureTextEntry={true}
        />

        <ContainerButton>
          <Button
            type="login"
            title="Próximo"
            onPress={handleSubmit(handleNext)}
          />
        </ContainerButton>
      </ContainerBody>
    </Container>
  );
}
