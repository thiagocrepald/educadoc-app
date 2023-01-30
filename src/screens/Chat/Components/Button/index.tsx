import React from "react";

import {
    ContainerButton,
    TextButton
} from './styles'

interface ButtonProps {
  onPress: () => void
}

export function ButtonAccept({onPress}: ButtonProps) {
  return (
    <>
      <ContainerButton onPress={onPress}>
        <TextButton>Aceitar chamado</TextButton>
      </ContainerButton>
    </>
  );
}
