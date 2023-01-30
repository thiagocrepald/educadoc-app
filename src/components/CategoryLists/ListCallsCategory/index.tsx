import React, { useMemo, useContext, useState, useEffect } from "react";

import {
  ContainerCalls,
  IconLoader,
  ContainerTexts,
  Name,
  Message,
  Date,
  ContainerSpaceBeetwen,
  Image,
} from "./styles";

import { StackParamsList } from "../../../routes/auth.routes";
import { AuthContext } from "../../../context/AuthContext";
import { firebase } from "../../../service/FirebaseDB";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import loader from "../../../assets/Icons/loader.png";
import open from "../../../assets/Icons/atendido.png";
import finish from "../../../assets/Icons/finish.png";
import moment from "moment";

/* interface ButtonProps {
  data: {
    _id: string;
    lastMessage: {
      createdAt: {
        nanoseconds: number;
        seconds: number;
      };
      text: string;
      photo?:  string | undefined;
    };
    user: {
      _id: string;
    };
    status: string;
    mentor: string;
    name: string;
    owner: string;
  };
  _ListCall?: {} | any;
}; */
type ButtonProps = {
  data: {} | any;
};
export function ListCallsCategory({ data }: ButtonProps) {
  const { user } = useContext(AuthContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(true);


  const isMessage = useMemo(() => {
    return data.user?._id === user.uid;
  }, [data]);

  const waitingMessage = "Aguardando atendimento";
  const closedMessage = "Chamado encerrado";
  const attendedMessage = "Chamado atendido";

  //evitando renderizações desnecessárias
  const message = useMemo(() => {
    if (data?.status === "Aguardando") {
      return waitingMessage;
    } else if (data?.status === "Encerrado") {
      return closedMessage;
    } else {
      return attendedMessage;
    }
  }, [data]);

  const iconSource = useMemo(() => {
    if (data?.status === "Aguardando") {
      return loader;
    } else if (data?.status === "Encerrado") {
      return finish;
    } else {
      return open;
    }
  }, [data]);

  useEffect(() => {
    firebase
      .storage()
      .ref(`images/`)
      .listAll()
      .then((result) => {
        result.items.forEach(async (itemRef) => {
          if (itemRef.name.includes(data.owner)) {
            const url = await itemRef.getDownloadURL();
            setUserPhoto(url);
          }
        });
      });
      return () => {
        setIsMounted(false);
      };
  }, []);

  function openChat(data: ButtonProps) {
    navigation.navigate("Chat", data);
  }

  const createdAt = data.lastMessage.createdAt;
  const timestamp = new firebase.firestore.Timestamp(
    createdAt?.seconds,
    createdAt?.nanoseconds
  );
  const date = timestamp.toDate();
  const month = moment().format("MMM");
  const day = date.getDate();
  const formattedDate = `${day} de ${month}`;

  return (
    <ContainerCalls onPress={() => openChat(data)}>
      <IconLoader>
        {userPhoto && user.status === "mentor" ? (
          <Image
            source={{ uri: userPhoto }}
            style={{
              height: 46,
              width: 46,
              borderRadius: 25,
            }}
          />
        ) : (
          <Image source={iconSource} />
        )}
      </IconLoader>
      <ContainerSpaceBeetwen>
        <ContainerTexts>
          {user.status === "estudante" ? <Name>{data?.mentor ? data.mentor : data?.name}</Name> : <Name>{data?.name}</Name>}
          <Message>{message}</Message>
        </ContainerTexts>
        <Date>{formattedDate}</Date>
      </ContainerSpaceBeetwen>
    </ContainerCalls>
  );
}
