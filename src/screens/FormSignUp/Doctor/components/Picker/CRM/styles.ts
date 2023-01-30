import styled from "styled-components/native";

export const ClosedModal = styled.TouchableOpacity`
    flex: 1;
`
export const ContainerModal = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid;
    border-color: #92c1cb;
    height:160px;
    width: 20%;
    margin-top: 245px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    margin-left: 258px;
    align-items: center;
    justify-content: center;
`
export const Title = styled.Text`
    font-size: 17px;
    font-family:${({ theme }) => theme.fonts.bold};
    margin-top: 32px;
`

export const ButtonOpiton = styled.TouchableOpacity`
    flex-direction: row;
`
export const TextSiglas = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 13px;
    margin-bottom: 4px;
`
