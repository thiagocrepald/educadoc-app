import React from 'react';

import {
    Container,
    Title,
    ContainerButton,
    ContainerBody,
} from './styles'

import { Button } from '../../components/Button'
import { NavigateProps } from '../../utils/navigateProps'

import { useNavigation } from '@react-navigation/native';

export function AlertMessage() {

    const { navigate } = useNavigation<NavigateProps>()
    return (
        <Container>
            <Title>
                Entre no link que{'\n'}
                enviamos para seu e-mail{'\n'}
                para alterar sua senha!
            </Title>

            <ContainerBody>
                <ContainerButton>
                    <Button
                        type="login"
                        onPress={() => navigate('ResetPassword')}
                        title='Próximo' />
                </ContainerButton>
            </ContainerBody>

        </Container>
    )
}