import styled from "styled-components/native";

export const ContainerModal = styled.View`
    background-color: ${({ theme }) => theme.colors.white};
    height: 70%;
    margin-top: 470px;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    align-items: center;
`
export const Title = styled.Text`
    font-size: 24px;
    font-family:${({ theme }) => theme.fonts.bold};
    margin-top: 32px;
`
export const Description = styled.Text`
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    margin-top: 24px;
`
export const ContainerButtons = styled.View`
    flex-direction: row;
    margin-top: 44px;
`
export const ButtonCancell = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.medium};
    padding: 12px 32px;
    border-radius: 8px;
`
export const ButtonFinish = styled.TouchableOpacity`
     background-color: ${({ theme }) => theme.colors.background};
    padding: 12px 32px;
    border-radius: 8px;
`
export const TextBtn = styled.Text`
    font-size: 18px;
    font-family:${({ theme }) => theme.fonts.bold};
`