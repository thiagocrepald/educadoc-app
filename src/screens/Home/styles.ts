import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
export const ContainerHeader = styled.View`
  padding: 0px 24px;
  width: 100%;
`;
export const ButtonClosed = styled.TouchableOpacity``;
export const ButtonAlertMessage = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f4f4;
  width: 100%;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.background};
  padding: 9px 16px;
  border-radius: 8px;
  margin-top: 11px;
`;
export const ContainerBody = styled.View`
  flex: 1;
  margin-bottom: 100px;
`;
export const ContainerListCalls = styled.View`
  padding: 0px 24px;
  margin-top: 32px;
`;
export const TextMessage = styled.Text`
  color: #7c7b7b;
`;
export const ContainerListCards = styled.View`
  flex-direction: row;
  padding-left: 15px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  margin-left: 10px;
`;
export const AlertTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray3};
  margin-left: 10px;
  margin-top: 10px;
`;
