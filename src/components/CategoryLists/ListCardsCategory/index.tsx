import React, { useState } from "react";

import {
  Container,
  Card,
  Image,
  Title
} from './styles'

import { TouchableOpacityProps } from 'react-native'

import Mentoria from '../../../assets/Icons/mentoria.png'
import Chamadas from '../../../assets/Icons/chamados.png'
import Dados from '../../../assets/Icons/dados.png'

interface ButtonCardProps extends TouchableOpacityProps {
  title: string;
  type: "mentoria" | "chamadas" | "dados";
}
const Icon = {
  mentoria: Mentoria,
  chamadas: Chamadas,
  dados: Dados,
};

export function ListCardsCategory({ type, title, ...rest }: ButtonCardProps) {
  const [pressed, setPressed] = useState(true);

  return (
    <Container>
      <Card {...rest}>
        <Image source={Icon[type]} />
        <Title>{title}</Title>
      </Card>
    </Container>
  );
}