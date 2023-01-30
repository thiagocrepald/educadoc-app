import React from "react";

import {
  SearchChat,
  TextInputChat,
  ButtonSend,
  Image,
  BoxRow,
  ButtonSendGalery,
} from "./styles";

import galery from "../../../../assets/Icons/galery.png";
import { Feather } from "@expo/vector-icons";

interface Props {
  onPress: () => void;
  handleSendImageChat: () => void;
  input: string;
  setInput: (input: string) => void;
}

export function SendChat({
  onPress,
  input,
  setInput,
  handleSendImageChat,
}: Props) {
  return (
    <>
      <SearchChat>
        <BoxRow>
          <ButtonSendGalery onPress={handleSendImageChat}>
            <Image source={galery} />
          </ButtonSendGalery>
          <TextInputChat
            placeholder="Escreva aqui..."
            placeholderTextColor="#3C3C3C"
            value={input}
            onChangeText={(e) => setInput(e)}
            multiline={true}
            autoCorrect={false}
          />
        </BoxRow>
        <ButtonSend onPress={onPress}>
          <Feather name="send" size={18} color="white" />
        </ButtonSend>
      </SearchChat>
    </>
  );
}