import React, { useMemo, useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

import { ButtonOpenPhoto, ContainerMessageUser, Message, Image } from "./styles";

interface DataProps {
  text: string;
  photo: string;
  user: {
    _id: string;
  }
}
interface Props {
  text: string;
  photo: string;
  data: DataProps;
}

export function MessageContainer({ text, data, photo }: Props) {
  const { user } = useContext(AuthContext);

  const isMessage = useMemo(() => {
    return data?.user._id === user.uid;
  }, [data]);

  const backgroundColor = isMessage ? "#F9F6F6" : "#EEF4F3";
  const marginRight = isMessage ? 0 : 80;
  const marginLeft = isMessage ? 80 : 0;
  const marginTop = 10;

  if (photo) {
    return (
      <ButtonOpenPhoto onPress={() => alert("Foto!")}>
        <Image source={{ uri: photo }} style={{marginLeft: isMessage ? 200 : 0}}/>
      </ButtonOpenPhoto>
    );
  }
  return (
    <ContainerMessageUser style={{ backgroundColor, marginRight, marginLeft, marginTop }}>
      <Message>{text}</Message>
    </ContainerMessageUser>
  );
}
