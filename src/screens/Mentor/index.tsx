import React, { useContext} from "react";

import {
  Container,
  ContainerHeader,
  ContainerBody,
  ContainerListCalls,
  ContainerTitle,
  Title,
  AlertTitle,
  ContainerListCards
} from "./styles";

import { Profile } from "../../components/Profile";
import { ListCallsCategory } from "../../components/CategoryLists/ListCallsCategory";
import { AuthContext } from "../../context/AuthContext";
import {Threads} from '../../Controlled/Threads'
import { SeparatorItem } from "../Home/components/SeparatorItem";
import { ListCardsCategory } from "../../components/CategoryLists/ListCardsCategory";

import { useNavigation, ParamListBase } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { FlatList } from "react-native";

export function Mentor() {
  
  const { user } = useContext(AuthContext);
  const { getCalls } = Threads();
  const { threads } = getCalls();
  
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <Container>
      <ContainerHeader>
        <Profile
          onPress={() => navigation.openDrawer()}
          hellow="Olá,"
          strong={user?.name}
          color="#000000"
        />
      </ContainerHeader>

      <ContainerListCards>
        <ListCardsCategory
          onPress={() => navigation.navigate("CallList")}
          type="chamadas"
          title="Atendimentos"
        />
        <ListCardsCategory
          style={{marginLeft: -60}}
          onPress={() => navigation.navigate("Profile")}
          type="dados"
          title="Meus dados"
        />
      </ContainerListCards>

      <ContainerBody>
        <ContainerListCalls>
          <ContainerTitle>
            <Title>Histórico de atendimentos</Title>
          </ContainerTitle>
            {threads.length === 0 ? (
              <AlertTitle>Não há chamadas disponíveis...</AlertTitle>
            ) : (
              <FlatList
                data={threads}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={SeparatorItem}
                inverted={true}
                renderItem={({ item }) => <ListCallsCategory data={item} />}
              />
            )}
        </ContainerListCalls>
      </ContainerBody>
    </Container>
  );
}
