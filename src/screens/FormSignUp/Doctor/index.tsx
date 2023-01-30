import React, { useState } from "react";

import {
  Container,
  TitleProgess,
  Title,
  ContainerBody,
  ContainerButton,
  ContainerCheckStudent,
  TextConfirmStudent,
  ButtonCheck,
  Ajusted,
  ContainerAlignRow,
  ContainerPicker,
  TitlePicker,
  ButtonOpenPicker,
} from "./styles";

import { Button } from "../../../components/Button";
import { StackParamsList } from "../../../routes/auth.routes";
import { PickerCrm } from "./components/Picker/CRM";
import { estados } from "../../../utils/estados";
import { Controlled } from "../../../components/Form/Controlled";

import { Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type SelectedProps = {
  estadocrm: string;
};
type FormDataDoctor = {
  crm: string;
  estadocrm: SelectedProps;
  dataFormatura: string;
  universidade: string;
  estado: string;
};

type RouteDetailParams = {
  Doctor: {
    name: string;
    cpf: string;
    dateNasc: string;
  };
};

export type DoctorRouteProp = RouteProp<RouteDetailParams, "Doctor">;

export function Doctor() {
  const { handleSubmit, control } = useForm<FormDataDoctor>();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const [pressed, setPressed] = useState(true);
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [itemSelect, setItemSelect] = useState<SelectedProps | undefined>();
  const route = useRoute<DoctorRouteProp>();
  const my = route.params;

  async function handle(doctor: FormDataDoctor) {
    const _OBJECT = {
      my: my,
      doctor: doctor,
      estadocrm: itemSelect
    };
    const _doctor = Object.assign({},
      _OBJECT.my,
      _OBJECT.doctor,
      _OBJECT.estadocrm
    );
    navigation.navigate("Acess", _doctor);
  }
  const estadosSiglas: SelectedProps[] = estados.map((estado) => ({
    estadocrm: estado.sigla,
  }));

  function handleChangeSelect(item: SelectedProps) {
    setItemSelect(item);
    setPopUpVisible(false);
  }

  function openModal() {
    setPopUpVisible(true);
  }

  return (
    <Container>
      <TitleProgess>PASSO 3 DE 5</TitleProgess>

      <Title>Dados do médico</Title>

      <ContainerBody>
        <ContainerCheckStudent>
          <ButtonCheck onPress={() => setPressed(!pressed)}>
            {pressed ? (
              <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color="white"
              />
            ) : (
              <Ionicons name="checkmark-circle" size={24} color="white" />
            )}
          </ButtonCheck>
          <TextConfirmStudent>Sou estudante</TextConfirmStudent>
        </ContainerCheckStudent>

        {pressed ? (
          <>
            <ContainerAlignRow>
              <Ajusted style={{ marginRight: 10 }}>
                <Controlled
                  name="crm"
                  control={control}
                  placeholder="CRM"
                  placeholderTextColor="#fff"
                />
              </Ajusted>
              <Ajusted style={{ marginLeft: 10 }}>
                <ContainerPicker>
                  <TitlePicker>
                    {itemSelect ? itemSelect?.estadocrm : "Estado CRM"}
                  </TitlePicker>
                  <ButtonOpenPicker onPress={() => openModal()}>
                    <AntDesign
                      name="down"
                      size={15}
                      color="white"
                      style={{ marginLeft: 5 }}
                    />
                  </ButtonOpenPicker>
                </ContainerPicker>
              </Ajusted>
            </ContainerAlignRow>

            <Controlled
              name="dataFormatura"
              control={control}
              placeholder="Data da formatura"
              placeholderTextColor="#fff"
              type="date"
            />

            <ContainerPicker>
              <TitlePicker>Especialidades</TitlePicker>
              <ButtonOpenPicker onPress={() => alert("em desenvolvimento...")}>
                <AntDesign name="down" size={24} color="white" />
              </ButtonOpenPicker>
            </ContainerPicker>
          </>
        ) : (
          <>
            <Controlled
              type="form"
              name="universidade"
              control={control}
              placeholder="Sua universidade"
              placeholderTextColor="#fff"
            />
            <Controlled
              name="estado"
              control={control}
              placeholder="Seu Estado"
              placeholderTextColor="#fff"
            />
          </>
        )}

        <ContainerButton>
          <Button type="login" onPress={handleSubmit(handle)} title="Próximo" />
        </ContainerButton>
      </ContainerBody>

      <Modal transparent={true} visible={popUpVisible} animationType="fade">
        <PickerCrm
          onClosed={() => setPopUpVisible(false)}
          options={estadosSiglas}
          selectedItem={handleChangeSelect}
        />
      </Modal>
    </Container>
  );
}
