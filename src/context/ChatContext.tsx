import React, { createContext, useState, ReactNode } from "react";
import { firebase } from "../service/FirebaseDB";

interface ChildrenProps {
  children: ReactNode;
}
interface Message {
  _id: string;
  text: string;
  createdAt: firebase.firestore.Timestamp;
  system?: boolean;
}
interface ChatContextType {
  messages: Message[];
  addMessage: (Message: Message) => void;
}

const ChatContext = createContext<ChatContextType>({
  messages: [],
  addMessage: () => {},
});

const ChatProvider = ({ children }: ChildrenProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const addMessage = (message: Message) => setMessages([...messages, message]);

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
