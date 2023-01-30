import React, { useContext } from "react";
import { firebase } from "../service/FirebaseDB";
import { AuthContext } from "../context/AuthContext";

export function Mentoring() {

  const { user } = useContext(AuthContext);

  const _refCollectionBase = firebase.firestore().collection("MENTORIAS_CHATS");

  const createMentoringFire = async () => {
    try {
      const docRef = await _refCollectionBase.add({
        name: user.name,
        owner: user.uid,
        status: "Aguardando",
        lastMessage: {
          text: `Aguardando atendimento`,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        },
      });
      const messageDocRef = await docRef.collection("MESSAGES").add({
        text1: "Olá, tudo bem?",
        text2: "Bem-vindo(a) a mentoria da Educadoc!",
        text3:
          "Pra iniciarmos, informe o Nome, Sexo, Idade e a descrição do problema do(a) paciente. Se quiser, também pode enviar um anexo sobre o(a) paciente.",
        text4:
          "Após enviar os dados, direcionaremos sua mensagem para um de nossos mentores.",
        text5:
          "Depois de iniciado o atendimento, se não houver interação após 2 horas o atendimento será encerrado",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        system: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {createMentoringFire}
}
