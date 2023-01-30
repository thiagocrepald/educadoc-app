import React from "react";

import {
  SearchChat,
  TextInputChat,
  ButtonSend,
  Image,
  BoxRow,
  ButtonSendGalery,
} from "./styles"

import galery from "../../../../assets/Icons/galery.png"
import { Feather } from "@expo/vector-icons";

export function SendClosed() {
  return (
    <>
      <SearchChat>
        <BoxRow>
          <ButtonSendGalery>
            <Image source={galery} />
          </ButtonSendGalery>
          <TextInputChat>Escreva aqui...</TextInputChat>
        </BoxRow>
        <ButtonSend>
          <Feather name="send" size={18} color="white" />
        </ButtonSend>
      </SearchChat>
    </>
  );
}
