import React from "react";
import {
  ContainerProfile,
  Date,
  ContainerTitle,
  Hellow,
  Strong,
  ContainerBetween,
} from "./styles";

import moment from "moment";
import "moment/locale/pt-br";

type Props = {
  hellow?: string;
  strong: string;
};

export function Profile({ hellow, strong }: Props) {

  const currentDate = moment().format("DD");
  const currentDay = moment().format("dddd");
  const currentMonth = moment().format("MMMM");
  const currentFormat = `${currentDay}, ${currentDate} de ${currentMonth}`;

  return (
    <ContainerProfile>
      <Date>{currentFormat}</Date>
      <ContainerBetween>
        <ContainerTitle>
          <Hellow>{hellow}</Hellow>
          <Strong>{strong}</Strong>
        </ContainerTitle>
      </ContainerBetween>
    </ContainerProfile>
  );
}
