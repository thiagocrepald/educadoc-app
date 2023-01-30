import React from "react";
import styled from "styled-components/native";
export const Separator = styled.Text`
    color: #eaeaea;
    align-items: center;
    text-align: center;
`;

export function SeparatorItem() {
  return (
    <>
      <Separator>____________________________________________________</Separator>
    </>
  );
}
