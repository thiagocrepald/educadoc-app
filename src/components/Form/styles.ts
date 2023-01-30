import styled from "styled-components/native";

export const BoxForm = styled.View`
  background-color: rgba(249, 223, 223, 0.16);
  border: 1px solid #92c1cb;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 14px;
  padding-right: 16px;
`
export const TextInput = styled.TextInput`
  color: ${({theme}) => theme.colors.white};
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
`
export const Button = styled.TouchableOpacity``