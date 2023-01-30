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
export const ContainerPhoto = styled.View`
    margin-bottom: 23px;
`
export const PhotoProfile = styled.View`
  height: 90px;
  width: 90px;
  background-color: #ccc;
  border-radius: 11px;
`
export const Photo = styled.TouchableOpacity``
export const UploadPhoto = styled.TouchableOpacity`
  height: 22px;
  width: 22px;
  border-radius: 11px;
  justify-content: center;
  align-items: center;
  background-color: #ACC3C7;
  margin-left: 70px;
  margin-top: -15px;
`
export const Image = styled.Image``
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
export const ButtonSexo = styled.TouchableOpacity``
export const Align = styled.View`
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
  margin-top: 19px;
`