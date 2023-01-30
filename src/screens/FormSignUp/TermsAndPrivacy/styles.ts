import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0px 22px;
  justify-content: center;
`
export const TitleProgess = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 12px;
  text-align: center;
  margin-top: 88px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 28px;
  text-align: center;
  margin-top: 34px;
  margin-bottom: 32px;
`
export const PrivacyText = styled.ScrollView`
  margin-bottom: 32px;
`;
export const FontText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  margin-bottom: 15px;
`;
export const ContainerButton = styled.View`
  margin-bottom: 20px;
`