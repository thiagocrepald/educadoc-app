import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgba(211, 224, 226, 0.3);
`;
export const ContainerProfile = styled.View`
  padding: 0px 32px;
  margin-bottom: 49px;
`;
export const ContainerBodyChat = styled.View`
  background-color: ${({ theme }) => theme.colors.gray3};
  flex: 1;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 0px 10px;
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
  background-color: #CBCACA;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  padding: 6px 10px;
  justify-content: space-between;
  margin-top: 10px;
`;
export const Image = styled.Image`
  margin-right: 10px;
`;
export const TextInputChat = styled.Text`
    color: #777777;
`;
export const BoxRow = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ButtonSend = styled.View`
  height: 35px;
  background-color: #777777;
  width: 35px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
export const ButtonSendGalery = styled.View``
export const Modal = styled.Modal``;
