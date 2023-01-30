import styled from "styled-components/native";

export const ContainerTextAccount = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.light};
`
export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
` 
export const Strong = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-left: 5px;
`