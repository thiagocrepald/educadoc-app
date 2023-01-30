import styled from "styled-components/native";

export const Container = styled.View`
  padding: 21px 20px;
  flex:1;
`;
export const ContainerClosesFilter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerTitle = styled.View`
    margin-left: 10px;
`;
export const Photo = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: red;
`;
export const Crm = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.light};;
`;
export const Image = styled.Image``;
export const ButtonClosedDrawer = styled.TouchableOpacity``;
export const ContainerFilter = styled.View`
  margin-top: 24px;
  flex-direction: row;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const ContainerListenerData = styled.View``
export const IconList = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`
export const TitleIcon = styled.Text`
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.light};;
`
export const FlexLogout = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`
export const ContainerLogout = styled.View`
    height: 475px;
    justify-content: flex-end;
`