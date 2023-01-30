import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`
export const ContainerHeader = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 25px;
    margin-top: 20px;
`
export const ContainerList = styled.View`
    margin-top: 50px;
    padding: 0px 24px;
`
export const Title = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.regular};
    font-size: 18px;
    color: ${({ theme }) => theme.colors.black};
    margin-left: 25px;
`
export const ButtonGoBack = styled.TouchableOpacity``