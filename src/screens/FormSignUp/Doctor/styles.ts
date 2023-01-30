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
export const HandleButton = styled.TouchableOpacity``
export const Ajusted = styled.View`
  flex-direction: row;
`
export const ContainerTextAccount = styled.View`
  margin-bottom: 16px;
  margin-top: 163px;
`
export const ContainerAlignRow = styled.View`
  flex-direction: row;
  width: 50%;
`
export const ContainerCheckStudent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`
export const ButtonCheck = styled.TouchableOpacity``
export const TextConfirmStudent = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.light};
    font-size: 16px;
    margin-left: 4px;
`
export const ContainerPicker = styled.View`
   background-color: rgba(249, 223, 223, 0.16);
  border: 1px solid #92c1cb;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 14px;
  padding: 16px 16px;
`
export const ButtonOpenPicker = styled.TouchableOpacity``
export const TitlePicker = styled.Text`
  color: ${({theme}) => theme.colors.white};
`
export const ContainerButton = styled.View`
  margin-top: 163px;
`