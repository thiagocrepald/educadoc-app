import React from "react";
import {
  Container,
  ContainerList,
  Title,
  ContainerHeader,
  ButtonGoBack,
} from "./styles";

import { FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { ListCallsCategory } from "../../components/CategoryLists/ListCallsCategory";
import { Threads } from "../../Controlled/Threads"
import { SeparatorItem } from "../Home/components/SeparatorItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/auth.routes";

export function CallList() {

  const { getCalls } = Threads();
  const { threads } = getCalls();

  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

  return (
    <Container>
      <ContainerList>
        <ContainerHeader>
          <ButtonGoBack onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </ButtonGoBack>
          <Title>Meus chamados</Title>
        </ContainerHeader>
        <FlatList
          data={threads}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={SeparatorItem}
          inverted={true}
          renderItem={({ item }) => <ListCallsCategory data={item} />}
        />
      </ContainerList>
    </Container>
  );
}
