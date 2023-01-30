import React, { useState, useEffect } from "react";

import {
  Container,
  TitleProgess,
  Title,
  ContainerBody,
  ContainerButton,
  ContainerPhoto,
  Image,
  UploadPhoto,
  PhotoProfile,
} from "./styles";

import { Button } from "../../../components/Button";
import { Controlled } from "../../../components/Form/Controlled";
import { StackParamsList } from "../../../routes/auth.routes";
import { schemaMy } from "../../../utils/validationForm";
import profile from "../../../assets/Icons/profile.png";
import photoProfile from "../../../assets/Icons/photo.png";
import { CheckBox } from "./components/CheckBox";

import { Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  cpf: string;
  dateNasc: string;
  sexo: string;
  category: string;
};

interface ResultProps {
  mediaTypes: Blob;
  allowsEditing: boolean;
  aspect: [];
  quality: number;
  result: {
    uri: string;
  };
}
export function My({}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const route = useRoute();
  const status = route.params;
  const [sexo, setSexo] = useState("notfound");
  const [photo, setPhoto] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schemaMy) });

  useEffect(() => {
    async function getPhoto() {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permissão");
        }
      }
    }
    getPhoto();
  }, []);

  async function pickerPhoto() {
    //alterar any
    let result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    if (!result?.cancelled) {
      setPhoto(result.uri);
    }
  }

  function handle(dadosMy: FormData) {
    const _OBJECT = {
      dadosMy: dadosMy,
      sexo: { sexo },
      status: { status },
      photo: { photo },
    };
    if (_OBJECT === null) return;
    const _my = Object.assign(
      {},
      _OBJECT.dadosMy,
      _OBJECT.sexo,
      _OBJECT.status,
      _OBJECT.photo
    );

    navigation.navigate("Doctor", _my);
  }

  return (
    <Container>
      <TitleProgess>PASSO 2 DE 5</TitleProgess>

      <Title>Conte sobre você!</Title>

      <ContainerPhoto>
        {photo == null ? (
          <Image source={profile} />
        ) : (
          <>
            <Image
              source={{ uri: photo }}
              style={{
                width: 90,
                height: 90,
                borderRadius: 11,
              }}
            />
          </>
        )}
        <UploadPhoto onPress={pickerPhoto} activeOpacity={9}>
          <Image source={photoProfile} />
        </UploadPhoto>
      </ContainerPhoto>

      <ContainerBody>
        <Controlled
          name="name"
          control={control}
          placeholder="Nome completo"
          placeholderTextColor="#fff"
          error={errors.name}
        />
        <Controlled
          name="cpf"
          control={control}
          placeholder="CPF"
          placeholderTextColor="#fff"
          error={errors.cpf}
          type="cpf"
        />
        <Controlled
          name="dateNasc"
          control={control}
          placeholder="Data de nascimento"
          placeholderTextColor="#fff"
          error={errors.dateNasc}
          type="date"
        />

        <CheckBox sexo={sexo} setSexo={setSexo} />

        <ContainerButton>
          <Button type="login" onPress={handleSubmit(handle)} title="Próximo" />
        </ContainerButton>
      </ContainerBody>
    </Container>
  );
}
