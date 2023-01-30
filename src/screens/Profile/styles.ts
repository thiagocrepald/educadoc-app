import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    padding: 0 63px;
   /*background-color: rgba(211, 224, 226, 0.3);*/
   background-color: #fff;
`
export const ContainerProfile = styled.View`
    align-items: center;
`
export const Title = styled.Text`
    margin-bottom: 25px;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 20px;
`
export const Photo = styled.View`
    height: 85px;
    width: 85px;
    border-radius: 45px;
    background-color: #ccc;
`
export const Name = styled.Text`
    margin-bottom: 45px;
    margin-top: 25px;
    font-family:${({ theme }) => theme.fonts.medium};
    font-size: 20px;
`
export const ContainerBody = styled.View``
export const ContainerCheckBox = styled.View``
export const ContainerAlignRow = styled.View`
  flex-direction: row;
`
export const Align = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`
export const TextSex = styled.Text`
  font-size: 14px;
  color: #3C3C3C;
  font-family: ${({ theme }) => theme.fonts.light};
  margin-left: 4px;
`