import React, { useContext, useEffect, useState } from "react";

import {
  Container,
  ContainerListCards,
  ContainerBody,
  ContainerListCalls,
  Title,
  AlertTitle,
} from "./styles";

import { FlatList, SafeAreaView, ScrollView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { StackParamsList } from "../../routes/auth.routes";
import { Header } from "./components/Header";
import { AuthContext } from "../../context/AuthContext";
import { ListCardsCategory } from "../../components/CategoryLists/ListCardsCategory";
import { ListCallsCategory } from "../../components/CategoryLists/ListCallsCategory";
import { SeparatorItem } from "./components/SeparatorItem";
import { Mentoring } from "../../Controlled/Mentoring";
import { Threads } from "../../Controlled/Threads";

export default function Home() {

  const { createMentoringFire } = Mentoring();
  const { getCalls } = Threads();
  const { threads } = getCalls();

  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  function handleCreate() {
    createMentoringFire();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header />

        <ContainerBody>
          <ContainerListCards>
            <ListCardsCategory
              onPress={() => handleCreate()}
              type="chamadas"
              title="Pedir mentoria"
            />
            <ListCardsCategory
              onPress={() => navigation.navigate("CallList")}
              type="chamadas"
              title="Meus chamados"
            />
            <ListCardsCategory
              onPress={() => navigation.navigate("Profile")}
              type="dados"
              title="Meus dados"
            />
          </ContainerListCards>

          <ContainerListCalls>
            <Title>Histórico de chamadas</Title>
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
    </SafeAreaView>
  );
}
