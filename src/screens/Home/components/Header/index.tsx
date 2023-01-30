import React, { useState, useContext } from "react";

import {
  ButtonAlertMessage,
  ContainerHeader,
  TextMessage,
  ButtonClosed,
} from "../../styles";
import { AntDesign } from "@expo/vector-icons";
import { Profile } from "../../../../components/Profile";
import { AuthContext } from "../../../../context/AuthContext";

export function Header() {

  const {user} = useContext(AuthContext)
  const [closed, setClosed] = useState(true);

  return (
    <>
      <ContainerHeader>
        <Profile onPress={() => {}} hellow="Olá," strong={user?.name} />
        {closed ? (
          <ButtonAlertMessage>
            <TextMessage>Aproveite seu 1º mês grátis!</TextMessage>
            <ButtonClosed onPress={() => setClosed(false)}>
              <AntDesign name="close" size={24} color="#7C7B7B" />
            </ButtonClosed>
          </ButtonAlertMessage>
        ) : null}
      </ContainerHeader>
    </>
  );
}
