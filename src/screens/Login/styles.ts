import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0px 57px;
  justify-content: center;
`
export const ContainerTitle = styled.View`
  margin-bottom: 89px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 28px;
`
export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.white};
  font-size: 28px;
  margin-top: 14px;
`
export const ContainerForm = styled.View``
export const ContainerPassword = styled.View`
  flex-direction: row;
  align-items: center;
`
export const ButtonIcon = styled.TouchableOpacity`
  margin-left: -40px;
  margin-top: -13px;
`
export const ButtonForgout = styled.TouchableOpacity``
export const TextForgoutPassword = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
 /*  margin-bottom: 194px; */
`
export const ContainerButton = styled.View`
  margin-top: 194px;
`
export const ContainerTextAccount = styled.View`
  margin-bottom: 16px;
`
