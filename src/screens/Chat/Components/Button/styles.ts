import styled from "styled-components/native";

export const ContainerButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.background};;
    padding: 14px;
    border-radius: 32px;
    align-items: center;
    margin-top: 10px;
`
export const TextButton = styled.Text`
    color:  ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.regular};;
`