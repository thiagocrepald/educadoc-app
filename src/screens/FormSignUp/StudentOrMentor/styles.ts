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
export const ContainerButton = styled.View`
  margin-top: 153px;
`
export const ContainerValidation = styled.View``
export const Buttonspecify = styled.TouchableOpacity`
  background-color: rgba(249, 223, 223, 0.16);
  border: 1px solid #92c1cb;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 14px;
`
export const Textspecify = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 14px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
`