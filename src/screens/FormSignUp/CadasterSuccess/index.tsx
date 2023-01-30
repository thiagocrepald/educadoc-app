import React from "react";

import {
    Container,
    Title,
    Image,
    ContainerButton,
    SubTitle
} from './styles'

import sucess from '../../../assets/Images/sucess.png'
import { Button } from "../../../components/Button";

import { NavigateProps } from '../../../utils/navigateProps'
import { useNavigation } from "@react-navigation/native";

export function CadasterSucces(){
    const {navigate} = useNavigation<NavigateProps>()
    return(
        <Container>

            <Title>Cadastro confirmado!</Title>

            <SubTitle>Aproveite seu 1º mês grátis!</SubTitle>

            <Image source={sucess}/>

            <ContainerButton>
                <Button
                    style={{paddingLeft: 100, paddingRight: 100}}
                    title="Ir para o login"
                    onPress={() => navigate('Login')}
                />
            </ContainerButton>

        </Container>
    )
}