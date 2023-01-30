import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
`
export const Image = styled.Image`
  margin-bottom: 342px;
  margin-top: 93px;
`
export const ContainerBody = styled.View`
    padding: 0px 57px;
    align-items: center;
`
export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.light};
    font-size: 28px;
    text-align: center;
    margin-bottom: 80px;
`
export const TitleSucess = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 28px;
    text-align: center;
`
export const SubTitleSucess = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 28px;
    text-align: center;
    margin-top: 16px;
`
export const ContainerButton = styled.View`
  margin-bottom: 16px;
  margin-top: 299px;
  width: 100%;
`