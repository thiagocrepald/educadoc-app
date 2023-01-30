import React, { useEffect, useState, useContext } from "react";
import { firebase } from "../service/FirebaseDB";
import { AuthContext } from "../context/AuthContext";

interface Item {
  _id: string;
}

export function Threads() {

  const { user } = useContext(AuthContext);
  const [threads, setThreads] = useState<Array<Item>>([]);

  const _refCollectionBase = firebase.firestore().collection("MENTORIAS_CHATS");
  const _refGetCalls = user.status === "mentor"? _refCollectionBase : _refCollectionBase.where("owner", "==", user.uid);

  const getCalls = () => {
    useEffect(() => {
      let isCancelled = false;
      _refGetCalls.onSnapshot((snapshot) => {
        if (!isCancelled) {
          const threads = snapshot.docs.map((document) => {
            return {
              _id: document.id,
              lastMessage: {
                text: "",
              },
              ...document.data(),
            };
          });
          setThreads(threads);
        }
      });
      return () => {
        isCancelled = true;
      };
    }, []);
    return { threads };
  };
  // criando uma função de callback vazia para o onSnapshot()
  // e armazenando a função de cancelamento "unsubscribe" em
  // uma constante
  const unsubscribe = _refGetCalls.onSnapshot(() => {});

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, []);

  return {getCalls}
}
