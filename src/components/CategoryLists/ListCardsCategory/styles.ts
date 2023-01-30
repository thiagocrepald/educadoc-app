import styled from "styled-components/native";

import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled.View`
  flex: 1;
`;
/* export const Card = styled(LinearGradient).attrs({
  colors: ['#F0F4F4', '#E6EAEB'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  width: 117px;
  height: 122px;r
  background-color: #ccc;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 11px;
  margin-right: 10px;
 `; */
 export const Card = styled.TouchableOpacity`
  width: 117px;
  height: 122px;
  background-color: #F0F4F4;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 11px;
 `
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 12px;
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const Image = styled.Image``;