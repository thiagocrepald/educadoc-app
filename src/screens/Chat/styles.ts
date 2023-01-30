import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color:${({ theme }) => theme.colors.white};
`;
export const ContainerProfile = styled.View`
  padding: 0px 20px;
  margin-bottom: 35px;
  flex-direction: row;
`;
export const ButtonGoBack = styled.TouchableOpacity``
export const ContainerBodyChat = styled.View`
  background-color: ${({ theme }) => theme.colors.gray3};
  flex: 1;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 0px 20px;
  justify-content: flex-end;
  padding-bottom: 40px;
`;
export const ButtonPopUp = styled.TouchableOpacity``;
export const MessageClosedChat = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red};
  margin: 8px 0px;
`;
export const SearchChat = styled.View`
  width: 100%;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  padding: 6px 10px;
  justify-content: space-between;
`;
export const Image = styled.Image`
  margin-right: 10px;
`;
export const TextInputChat = styled.TextInput``;
export const BoxRow = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ButtonSend = styled.TouchableOpacity`
  height: 35px;
  background-color: ${({ theme }) => theme.colors.background};
  width: 35px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
export const ButtonSendGalery = styled.TouchableOpacity``
export const Modal = styled.Modal``;
