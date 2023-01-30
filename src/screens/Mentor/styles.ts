import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color:${({ theme }) => theme.colors.white};
`;
export const ContainerHeader = styled.View`
  padding: 0px 24px;
  width: 100%;
`;
export const ContainerListCards = styled.View`
  flex-direction: row;
  padding-left: 22px;
`
export const ContainerBox = styled.View`
  padding: 0px 24px;
`;
export const Box = styled.View`
  background-color: #f0f4f4;
  margin-top: 16px;
  border-radius: 8px;
`;
export const TitleMessage = styled.Text`
  padding-top: 20px;
  margin-bottom: 20px;
  padding-right: 18px;
  padding-left: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`;
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
  margin-bottom: 53px;
`;
export const ContainerListCalls = styled.View`
  padding: 0px 24px;
  margin-top: 16px;
`;
export const AlertTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray3};
  margin-left: 10px;
  margin-top: 10px;
`;
export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const ButtonFilder = styled.TouchableOpacity``;
export const Image = styled.Image``;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  margin-left: 10px;
`;