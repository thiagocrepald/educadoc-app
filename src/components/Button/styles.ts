import styled, { DefaultTheme } from "styled-components/native";

export const ContainerButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  border-radius: 16px;
`;
export const ContainerTextAccount = styled.View`
  margin-bottom: 16px;
`
export const TitleButton = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  color: #0c7384;
  font-family: ${({ theme }) => theme.fonts.bold};;
  font-size: 18px;
  padding: 12px 0px;
`;
export const Loading = styled.ActivityIndicator`
  padding: 12px 120px;
  color: #0c7384;
`