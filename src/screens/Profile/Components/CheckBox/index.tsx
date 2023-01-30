import React, { useContext, useMemo } from "react";

import {
  ContainerCheckBox,
  ContainerAlignRow,
  Align,
  TextSex,
} from "../../styles";

import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../../../context/AuthContext";

export function CheckBox() {
  const { user } = useContext(AuthContext);

 /*  console.log('user', user.sexo) */

  return (
    <ContainerCheckBox>
      <ContainerAlignRow>
        <Align>
          <Ionicons
            name="checkmark-circle-outline"
            size={27}
            color={user.sexo === "Feminino" ? "#0C7384" : "#D3E0E2"}
          />
          <TextSex>Feminino</TextSex>
        </Align>
        <Align>
          <Ionicons
            name="checkmark-circle-outline"
            size={27}
            color={user.sexo === "Masculino" ? "#0C7384" : "#D3E0E2"}
          />
          <TextSex>Masculino</TextSex>
        </Align>
      </ContainerAlignRow>
      <Align style={{ marginTop: 10 }}>
        <Ionicons
          name="checkmark-circle-outline"
          size={27}
          color={user.sexo === "Prefiro não responder" ? "#0C7384" : "#D3E0E2"}
        />
        <TextSex>Prefiro não responder</TextSex>
      </Align>
    </ContainerCheckBox>
  );
}
