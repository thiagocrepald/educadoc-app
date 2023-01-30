import styled from "styled-components/native";

export const ContainerProfile = styled.View`
    margin-left: 10px;
    margin-top: 50px;
`
export const ContBetWeen = styled.View``
export const Date = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.light};
`
export const ContainerTitle = styled.View`
    flex-direction: row;
    align-items: center;
`
export const Hellow = styled.Text`
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.light};
    font-size: 18px;
`
export const Strong = styled.Text`
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 18px;
    margin-left: 4px;
`
export const Photo = styled.TouchableOpacity``
export const ContainerBetween = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
export const ButtonOpenDrawer = styled.TouchableOpacity``