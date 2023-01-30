import React, { useState, useEffect, SetStateAction } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Telas de Welcome e Login
import { SignIn } from "../screens/SignIn";
import { Login } from "../screens/Login";

//Telas para resetar a senha
import { Forgout } from "../screens/Forgout";
import { ResetPassword } from "../screens/Forgout/resetpass";
import { AlertMessage } from "../screens/Forgout/alertMessage";
import { AlertMessageSucess } from "../screens/Forgout/alertMessageSucess";

//Telas de Cadastro
import { StudentOrMentor } from "../screens/FormSignUp/StudentOrMentor";
import { My } from "../screens/FormSignUp/My";
import { Doctor } from "../screens/FormSignUp/Doctor";
import { Acess } from "../screens/FormSignUp/Acess";
import { TermsAndPrivacy } from "../screens/FormSignUp/TermsAndPrivacy";
import { CadasterSucces } from "../screens/FormSignUp/CadasterSuccess";

export type StackParamsList = {
  AdminRoutes: undefined;
  Chat?: {
    data: {
      _id: string;
      status: string;
      owner: string;
      lastMessage: {
        createdAt: {
          nanoseconds: number;
          seconds: number;
        };
        text: string;
      };
      user: {
        _id: string;
      };
      mentor: string;
      name: string;
    };
    _ListCall?: {} | any;
  };
  Home: undefined;
  Mentor: undefined;
  My: undefined;
  Doctor: {
    name: string;
    cpf: string;
    dateNasc: string;
  };
  //alterar dps
  Acess?: {};
  SignIn: undefined;
  Login: undefined;
  Forgout: undefined;
  AlertMessage: undefined;
  ResetPassword: {
    senha: string;
  };
  AlertMessageSucess: undefined;
  StudentOrMentor: {
    type: string;
  };
  TermsAndPrivacy: undefined;
  CadasterSucces: undefined;
  MainDrawer: undefined;
  Profile: undefined;
  CallList: undefined
};

const AuthStack = createStackNavigator<StackParamsList>();

export function AuthRoutes() {
  const [isAppSignInLauched, setIsAppSignInLauched] = useState<any>(null);
  //Verificando se o usuário já fez mais de um login no app
  useEffect(() => {
    appLauched();
  }, []);
  async function appLauched() {
    const appData = await AsyncStorage.getItem("isAppFirstLauched");
    if (appData == null) {
      setIsAppSignInLauched(true);
      AsyncStorage.setItem("isAppFirstLauched", "false");
    } else {
      setIsAppSignInLauched(false);
    }
  }
  return (
    isAppSignInLauched != null && (
      <AuthStack.Navigator>
        {isAppSignInLauched && (
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="SignIn"
            component={SignIn}
          />
        )}
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Forgout"
          component={Forgout}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="AlertMessage"
          component={AlertMessage}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="ResetPassword"
          component={ResetPassword}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="AlertMessageSucess"
          component={AlertMessageSucess}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="StudentOrMentor"
          component={StudentOrMentor}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="My"
          component={My}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Doctor"
          component={Doctor}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Acess"
          component={Acess}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="TermsAndPrivacy"
          component={TermsAndPrivacy}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="CadasterSucces"
          component={CadasterSucces}
        />
      </AuthStack.Navigator>
    )
  );
}
