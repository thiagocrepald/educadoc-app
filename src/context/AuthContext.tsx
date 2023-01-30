import React, { useState, createContext, ReactNode, useEffect } from "react";
import { firebase } from "../service/FirebaseDB";
import { StackParamsList } from "../routes/auth.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

interface AuthContextFirebase {
  user: UserProps;
  singIn: (credentials: SignInFirebase) => Promise<void>;
  signUp: (credentials: SignUpFirebase) => Promise<void>;
  forgoutPassword: (credentials: ForgoutPasswordFirebase) => Promise<void>;
  signOut: () => Promise<void>;
  loadingAuth: boolean;
  loading: boolean;
  signed: boolean;
}
type UserProps = {
  uid: string;
  name: string;
  email: string;
  status: string;
  photo: string;
  cpf: string | number;
  sexo: string;
  dateNasc: string | number;
};
interface AuthProviderProps {
  children: ReactNode;
  uid: string;
}
export interface ForgoutPasswordFirebase {
  email: string;
}
export interface SignInFirebase {
  uid: string;
  email: string;
  password: string;
  status: string;
}
export interface SignUpFirebase {
  uid: string;
  //categoria
  status: string;
  //dados pessoais
  photo: string;
  name: string;
  cpf: string | number;
  dateNasc: string | number;
  sexo: string;
  //dados do médico
  crm: string;
  estudante?: boolean;
  estadocrm: string;
  dataFormatura: string;
  universidade?: string;
  estado?: string;
  especialidades?: string;
  //dados de acesso
  celular: string;
  email: string;
  senha: string;
  confirm_senha: string;
}

export const AuthContext = createContext({} as AuthContextFirebase);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>(null!);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const _collectionRefUser = firebase.firestore().collection("usuarios");

  //persistindo o login do usuário//
  //token=@educadoctoken
  useEffect(() => {
    loadStorage();
  }, []);
  async function loadStorage() {
    const storageUser = await AsyncStorage.getItem("@educadoctoken");
    if (storageUser) {
      setUser(JSON.parse(storageUser));
      setLoading(false);
    }
    setLoading(false);
  }
  //metodo de cadastro [FIREBASE]
  async function signUp(data: SignUpFirebase) {
    setLoadingAuth(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.senha)
      .then(async (value) => {
        //guardando uid do usuário//
        let uid = value.user?.uid;
        // Referência para a localização de armazenamento da imagem do usuário
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(`images/${uid}`);
        // Verifica se o arquivo é um arquivo de imagem
        if (!data.photo.startsWith("file://")) {
          throw new Error("Arquivo de imagem inválido");
        }
        // Pega o Blob a partir do arquivo de imagem
        const response = await fetch(data.photo);
        const blob = await response.blob();
        // Faz o upload da imagem para o Firebase Storage
        await imageRef.put(blob);
        // Pega a URL de download para a imagem
        const urlDaFoto = await imageRef.getDownloadURL();
        // Salvando o restante dos dados do cadastro
        await _collectionRefUser
          .doc(uid)
          .set({
            createdAt: new Date(),
            uid: uid,
            photo: urlDaFoto,
            status: data.status ? data.status : null,
            name: data.name ? data.name : null,
            cpf: data.cpf ? data.cpf : null,
            dateNasc: data.dateNasc ? data.dateNasc : null,
            sexo: data.sexo ? data.sexo : null,
            crm: data.crm ? data.crm : "Estudante",
            estadocrm: data.estadocrm ? data.estadocrm : "Estudante",
            universidade: data.universidade ? data.universidade : null,
            estado: data.estado ? data.estado : null,
            formatura: data.dataFormatura ? data.dataFormatura : "Estudante",
            celular: data.celular ? data.celular : null,
            email: data.email ? data.email : null,
          })
          .then(() => {
            setLoadingAuth(false);
            console.log("cadastrado com sucesso");
          });
      })
      .catch((err) => {
        setLoadingAuth(false);
        console.log(err, "erro ao cadastrar");
      });
  }
  //metodo de login [FIREBASE]
  async function singIn(data: SignInFirebase) {
    try {
      setLoadingAuth(true);
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      if (user) {
        const userProfile = await _collectionRefUser.doc(user!.uid).get();
        const cadaster: UserProps = {
          uid: user.uid,
          email: user.email!,
          cpf: userProfile.data()!.cpf,
          name: userProfile.data()!.name,
          status: userProfile.data()!.status,
          photo: userProfile.data()!.photo,
          sexo: userProfile.data()!.sexo,
          dateNasc: userProfile.data()!.dateNasc,
        };
        setUser(cadaster);
        storageUser(cadaster);
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro ao fazer login :(",
        position: "top",
        topOffset: 70,
      });
      setLoadingAuth(false);
    } finally {
      setLoadingAuth(false);
    }
  }
  //metodo de deslogar [FIREBASE]
  async function signOut() {
    await firebase.auth().signOut();
    await AsyncStorage.clear()
      .then(() => {
        console.log("deslogado");
        setUser(null!);
      })
      .catch((error) => console.log(error));
  }
  //metodo de recuperar senha [FIREBASE]
  async function forgoutPassword(data: ForgoutPasswordFirebase) {
    setLoadingAuth(true);
    await firebase
      .auth()
      .sendPasswordResetEmail(data.email)
      .then(() => {
        navigation.navigate("AlertMessage");
        setLoadingAuth(false);
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: "Ops! tente novamente :(",
          position: "top",
          topOffset: 70,
        });
        setLoadingAuth(false);
      });
  }

  async function storageUser(data: UserProps) {
    await AsyncStorage.setItem("@educadoctoken", JSON.stringify(data));
  }

  const value = {
    signed: !!user,
    singIn,
    signUp,
    signOut,
    forgoutPassword,
    loading,
    user,
    loadingAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
