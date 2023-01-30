import React, { useContext } from "react";

import {
  Container,
  ContainerFilter,
  Title,
  Image,
  ContainerClosesFilter,
  ButtonClosedDrawer,
  Crm,
  ContainerTitle,
  ContainerListenerData,
  IconList,
  TitleIcon,
  ContainerLogout,
  FlexLogout,
} from "./styles";
import { DrawerContentScrollView } from "@react-navigation/drawer";

import { AntDesign } from "@expo/vector-icons";
import {
  useNavigation,
  ParamListBase,
  DrawerActions,
} from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { AuthContext } from "../../../context/AuthContext";

import dados from "../../../assets/Icons/data.png";
import mart from "../../../assets/Icons/mart.png";
import logout from "../../../assets/Icons/logout.png";

export function CustomDrawer(props: any) {
  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <DrawerContentScrollView {...props}>
      <Container>
        <ContainerClosesFilter>
          <ButtonClosedDrawer
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </ButtonClosedDrawer>
        </ContainerClosesFilter>
        <ContainerFilter>
          <Image
            source={{ uri: user.photo }}
            style={{
              height: 40,
              width: 40,
              borderRadius: 50,
            }}
          />
          <ContainerTitle>
            <Title>Olá, {user.name}</Title>
            <Crm>CRM - 17723-976</Crm>
          </ContainerTitle>
        </ContainerFilter>

        <ContainerListenerData>
          <IconList onPress={() => navigation.navigate("Profile")} style={{ marginTop: 41 }}>
            <Image source={dados} />
            <TitleIcon style={{ marginLeft: 21 }}>Meus dados</TitleIcon>
          </IconList>
          <IconList style={{ marginTop: 26 }}>
            <Image source={mart} />
            <TitleIcon style={{ marginLeft: 14 }}>
              Termos de privacidade
            </TitleIcon>
          </IconList>
          <ContainerLogout>
            <FlexLogout onPress={() => signOut()}>
              <Image source={logout} />
              <TitleIcon style={{ marginLeft: 19 }}>Sair</TitleIcon>
            </FlexLogout>
          </ContainerLogout>
        </ContainerListenerData>
      </Container>
    </DrawerContentScrollView>
  );
}
