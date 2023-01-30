import styled from "styled-components/native";

export const ContainerCalls = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: 16px;
    border-bottom: 1px;
    border-color: red;
    flex-shrink: 1;
`
export const IconLoader = styled.View`
    height: 46px;
    width: 46px;
    background-color: #F8EAD0;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
`
export const Image = styled.Image``
export const ContainerTexts = styled.View`
    margin-left: 8px;
`
export const ContainerSpaceBeetwen = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
`
export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
`
export const Message = styled.Text`
    color: ${({ theme }) => theme.colors.gray2};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
`
export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.gray2};
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 16px;
`