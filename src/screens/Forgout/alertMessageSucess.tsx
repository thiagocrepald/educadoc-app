import React from 'react';

import {
    Container,
    TitleSucess,
    SubTitleSucess,
    ContainerBody,
    Image
} from './styles'

import { Button } from '../../components/Button'
import reset from '../../assets/Images/reset.png'
import { NavigateProps } from '../../utils/navigateProps'

import { useNavigation } from '@react-navigation/native';

export function AlertMessageSucess() {

    const { navigate } = useNavigation<NavigateProps>()
    return (
        <Container>
            <TitleSucess>Senha alterada com{'\n'}sucesso!</TitleSucess>
            <SubTitleSucess>Agora faça o seu Login</SubTitleSucess>

            <ContainerBody>
                <Image
                    source={reset}
                />

                <Button
                    onPress={() => navigate('Login')}
                    title='Acessar' />
            </ContainerBody>

        </Container>
    )
}