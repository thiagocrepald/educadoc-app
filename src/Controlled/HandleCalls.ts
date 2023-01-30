import { useContext } from "react";
import { firebase } from "../service/FirebaseDB";
import { AuthContext } from "../context/AuthContext";

interface PropsFinishCall {
  setPopUpVisible: (isVisible: boolean) => void;
  navigation: any;
  _id: string;
}

interface PropsHandleSet {
  input: string;
  setInput: (input: string) => void;
  user: { uid: string; name: string };
  _id: string;
}

export function handleCalls() {
  const { user } = useContext(AuthContext);

  async function handleStatusOn(_id: string) {
    await firebase.firestore().collection("MENTORIAS_CHATS").doc(_id).update({
      status: "Atendido",
      mentor: user.name,
    });
  }

  async function finishCall(props: PropsFinishCall) {
    await firebase
      .firestore()
      .collection("MENTORIAS_CHATS")
      .doc(props._id)
      .update({ status: "Encerrado" })
      .then(() => {
        props.setPopUpVisible(false);
        props.navigation.goBack();
      });
  }

  async function handleSend(props: PropsHandleSet) {
    if (props.input === "") return;

    await firebase
      .firestore()
      .collection("MENTORIAS_CHATS")
      .doc(props._id)
      .collection("MESSAGES")
      .add({
        text: props.input,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        user: {
          _id: user.uid,
          name: user.name,
        },
      });
    await firebase
      .firestore()
      .collection("MENTORIAS_CHATS")
      .doc(props._id)
      .set(
        {
          lastMessage: {
            text: props.input,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          },
        },
        { merge: true }
      );
    props.setInput("");
  }

  return { handleStatusOn, finishCall, handleSend };
}
