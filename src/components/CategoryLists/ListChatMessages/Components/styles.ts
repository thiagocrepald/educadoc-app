import styled from "styled-components/native";

export const ContainerMessage = styled.View`
  border-top-left-radius: 16px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;
export const Message = styled.Text`
  padding: 9px 9px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.light};
`;
export const ContainerMessageUser = styled.View`
  background-color: red;
  border-top-left-radius: 4px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  margin-top: 10px;
`;
export const ButtonOpenPhoto = styled.TouchableOpacity``
export const Image = styled.Image`
  height: 150px;
  width: 150px;
  margin-top: 10px;
  border-radius: 11px;
`