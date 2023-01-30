import styled from "styled-components/native";
export const SearchChat = styled.View`
  width: 100%;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.white};
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
export const TextInputChat = styled.TextInput`
  width: 260px;
`;
export const BoxRow = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ButtonSend = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
export const ButtonSendGalery = styled.TouchableOpacity``
export const Modal = styled.Modal``;
