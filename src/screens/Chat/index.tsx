import React, { useState, useEffect, useContext } from "react";

import {
  Container,
  ContainerProfile,
  ContainerBodyChat,
  ButtonPopUp,
  MessageClosedChat,
  Modal,
  ButtonGoBack,
} from "./styles";

import { ModalPopUp } from "./Modal";
import { AuthContext } from "../../context/AuthContext";
import { Messages } from "../../components/CategoryLists/ListChatMessages";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/auth.routes";
import { firebase } from "../../service/FirebaseDB";
import { SendClosed } from "./Components/SendClosed";
import { SendChat } from "./Components/SendChat";
import { ButtonAccept } from "./Components/Button";
import { Profile } from "./Components/Header";
import {handleCalls} from '../../Controlled/HandleCalls'

import { FlatList, Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

type RouteDetailParams = {
  Chat: {
    _id: string;
    lastMessage: {
      text: string;
      textWelcome: string;
      description: string;
    };
    owner: string;
    status: string;
    name: string;
  };
};

type ChatRouteProp = RouteProp<RouteDetailParams, "Chat">;

interface Item {
  _id: string;
}

export function Chat() {
  const { user } = useContext(AuthContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const route = useRoute<ChatRouteProp>();
  const [popUpVisible, setPopUpVisible] = useState(false);
  const { _id, status } = route.params;
  const my = route.params;

 const {finishCall, handleStatusOn} = handleCalls()

  const nameChat = user.status === "mentor" ? my.name : user.name;

  const [messages, setMessages] = useState<Array<Item>>([]);
  const [showChat, setShowChat] = useState(false);
  const [showAccept, setShowAccept] = useState(true);
  const [input, setInput] = useState("");

  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    // recuperar o estado do armazenamento local para observar o <ButtonAccept/>
    AsyncStorage.getItem("chatState").then((chatState) => {
      AsyncStorage.getItem("acceptedChatId").then((acceptedChatId) => {
        if (chatState === "Accept" && acceptedChatId === _id) {
          setShowAccept(false);
          setShowChat(true);
        }
      });
    });
  }, []);

  useEffect(() => {
    const Listener = firebase
      .firestore()
      .collection("MENTORIAS_CHATS")
      .doc(_id)
      .collection("MESSAGES")
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        const messages = querySnapshot.docs.map((doc) => {
          const firebaseData = doc.data();
          const data = {
            _id: doc.id,
            text: "",
            photo: "",
            user: user.name,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            ...firebaseData, //todo o restante
          };
          //verificando se a messagem foi enviada pelo sistema ou pelo usrio
          if (!firebaseData.system) {
            data.user = {
              ...firebaseData?.user,
              name: user.name,
            };
          }
          return data;
        });
        setMessages(messages);
      });
    return () => {
      Listener();
    };
  }, []);

  function handleChangeStatus() {
    setShowAccept(false);
    setShowChat(true);
    // salvar o estado no armazenamento local
    AsyncStorage.setItem("chatState", "Accept");
    AsyncStorage.setItem("acceptedChatId", _id);
    //Alterando o status da chamada para "Atendido"
    handleStatusOn(_id);
  }

  function handleFinishCall() {
    finishCall({
      setPopUpVisible: setPopUpVisible,
      navigation: navigation,
      _id: _id,
    });
  }
  /* function handleButtonPressd() {
    handleSend({ input: input, setInput: setInput, user: user, _id: _id });
  } */
  useEffect(() => {
    async function getPhoto() {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permissão");
        }
      }
    }
    getPhoto();
  }, []);

  async function pickerPhoto() {
    let result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    if (!result?.cancelled) {
      setPhoto(result.uri);
    }
  }
  async function handleSend() {
    await firebase
      .firestore()
      .collection("MENTORIAS_CHATS")
      .doc(_id)
      .collection("MESSAGES")
      .add({
        text: input,
        photo: photo,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        user: {
          _id: user.uid,
          name: user.name,
        },
      });
    await firebase
      .firestore()
      .collection("MENTORIAS_CHATS")
      .doc(_id)
      .set(
        {
          lastMessage: {
            text: input,
            photo: photo,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          },
        },
        { merge: true }
      );
    setInput("");
    setPhoto(null);
  }
  return (
    <Container>
      <ContainerProfile>
        <ButtonGoBack onPress={() => navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            style={{
              marginTop: 60,
            }}
          />
        </ButtonGoBack>
        <Profile strong={nameChat} />
      </ContainerProfile>

      <ContainerBodyChat>
        <FlatList
          data={messages}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          inverted={true}
          renderItem={({ item }) => <Messages data={item} />}
        />
        {showAccept && user.status === "mentor" ? (
          <>
            {status === "Encerrado" ? (
              <SendClosed />
            ) : (
              <ButtonAccept onPress={() => handleChangeStatus()} />
            )}
          </>
        ) : (
          <>
            {user.status === "mentor" ? null : (
              <>
                {status === "Encerrado" ? (
                  <MessageClosedChat style={{ color: "#595959" }}>
                    Este chamado foi encerrado.
                  </MessageClosedChat>
                ) : (
                  <ButtonPopUp onPress={() => setPopUpVisible(true)}>
                    <MessageClosedChat>Encerrar chamado</MessageClosedChat>
                  </ButtonPopUp>
                )}
              </>
            )}
            <>
              {status === "Encerrado" ? (
                <SendClosed />
              ) : (
                <SendChat
                  handleSendImageChat={() => pickerPhoto()}
                  input={input}
                  setInput={setInput}
                  onPress={() => handleSend()}
                />
              )}
            </>
          </>
        )}

        <Modal transparent={true} visible={popUpVisible} animationType="slide">
          <ModalPopUp
            onClosed={() => setPopUpVisible(false)}
            onFinishCall={() => handleFinishCall()}
          />
        </Modal>
      </ContainerBodyChat>
    </Container>
  );
}
