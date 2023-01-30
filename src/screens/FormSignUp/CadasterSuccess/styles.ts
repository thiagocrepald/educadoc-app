import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0px 22px;
  justify-content: center;
  align-items: center;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 28px;
  text-align: center;
  margin-top: 100px;
`
export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 28px;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 73px;
`
export const Image = styled.Image``
export const ContainerButton = styled.View`
  flex:2;
  justify-content: flex-end;
  margin-bottom: 48px;
`