import React, { useContext } from "react";
import {
  ContainerProfile,
  Date,
  ContainerTitle,
  Hellow,
  Strong,
  ContainerBetween,
  Photo,
  ButtonOpenDrawer,
} from "./styles";

import { EvilIcons } from "@expo/vector-icons";
import { AuthContext } from "../../context/AuthContext";
import { Image } from "react-native";
import profile from "../../assets/Icons/profile.png";
import { StackParamsList } from "../../routes/auth.routes";

import moment from "moment";
import "moment/locale/pt-br";
import { AntDesign } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type Props = {
  hellow?: string;
  strong: string;
  onPress: () => void;
  color?: string;
};

export function Profile({ hellow, onPress, color, strong }: Props) {
  const { user } = useContext(AuthContext);

  const currentDate = moment().format("DD");
  const currentDay = moment().format("dddd");
  const currentMonth = moment().format("MMMM");
  const currentFormat = `${currentDay}, ${currentDate} de ${currentMonth}`;

  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const drawer = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <ContainerProfile>
      <Date>{currentFormat}</Date>
      <ContainerBetween>
        <ContainerTitle>
          <Hellow>{hellow}</Hellow>
          <Strong>{strong}</Strong>
        </ContainerTitle>

        {user.photo === null ? (
          <Image source={profile} />
        ) : (
          <Photo
            onPress={() =>
              user.status === "mentor"
                ? drawer.openDrawer()
                : navigation.navigate("Profile")}>
            <Image
              source={{ uri: user.photo }}
              style={{
                height: 40,
                width: 40,
                borderRadius: 50,
                marginTop: -17,
              }}
            />
          </Photo>
        )}
      </ContainerBetween>
    </ContainerProfile>
  );
}
