import styled from "styled-components/native";

export const Container = styled.View`
      flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0px 57px;
  justify-content: center;
`
export const TitleProgess = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 12px;
  text-align: center;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 28px;
  text-align: center;
  margin-top: 34px;
  margin-bottom: 73px;
`
export const ContainerBody = styled.View``
export const ContainerPhoto = styled.View``
export const Photo = styled.TouchableOpacity`
  height: 90px;
  width: 90px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 23px;
`
export const TextForgoutPassword = styled.Text`
text-align: center;
font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.white};
`
export const ContainerTextAccount = styled.View`
  margin-bottom: 16px;
  margin-top: 19px;
`
export const ContainerCheckBox = styled.View``
export const ContainerAlignRow = styled.View`
  flex-direction: row;
`
export const Align = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`
export const TextSex = styled.Text`
    font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.light};
  margin-left: 4px;
`
export const ContainerButton = styled.View`
  margin-top: 153px;
`