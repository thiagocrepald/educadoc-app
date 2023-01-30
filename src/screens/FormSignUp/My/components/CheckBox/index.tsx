import React from "react";

import {
  ContainerCheckBox,
  ContainerAlignRow,
  Align,
  TextSex,
  ButtonSexo,
} from "../../styles";

import { Ionicons } from "@expo/vector-icons";

interface CategorySexoProp {
  sexo: string;
  setSexo: (sexo: string) => void;
}

export function CheckBox({ sexo, setSexo }: CategorySexoProp) {
  return (
    <>
      <ContainerCheckBox>
        <ContainerAlignRow>
          <Align>
            <ButtonSexo onPress={() => setSexo("Feminino")}>
              {sexo === "Feminino" ? (
                <Ionicons name="checkmark-circle" size={24} color="white" />
              ) : (
                <Ionicons
                  name="checkmark-circle-outline"
                  size={24}
                  color="white"
                />
              )}
            </ButtonSexo>
            <TextSex>Feminino</TextSex>
          </Align>
          <Align>
            <ButtonSexo onPress={() => setSexo("Masculino")}>
              {sexo === "Masculino" ? (
                <Ionicons name="checkmark-circle" size={24} color="white" />
              ) : (
                <Ionicons
                  name="checkmark-circle-outline"
                  size={24}
                  color="white"
                />
              )}
            </ButtonSexo>
            <TextSex>Masculino</TextSex>
          </Align>
        </ContainerAlignRow>
        <Align style={{ marginTop: 10 }}>
          <ButtonSexo onPress={() => setSexo("Prefiro não responder")}>
            {sexo === "Prefiro não responder" ? (
              <Ionicons name="checkmark-circle" size={24} color="white" />
            ) : (
              <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color="white"
              />
            )}
          </ButtonSexo>
          <TextSex>Prefiro não responder</TextSex>
        </Align>
      </ContainerCheckBox>
    </>
  );
}
