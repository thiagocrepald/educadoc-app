import React, { useContext } from 'react';
import {
    Container,
    Title,
    ContainerBody,
    ContainerButton,
} from './styles'

import { Button } from '../../components/Button'
import { schemaForgout } from '../../utils/validationForm'
import { Controlled } from '../../components/Form/Controlled';
import { StackParamsList } from '../../routes/auth.routes'
import { AuthContext, ForgoutPasswordFirebase } from '../../context/AuthContext'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native';

export function Forgout() {

    const { forgoutPassword } = useContext(AuthContext)

    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()
    const { control, handleSubmit, formState: { errors } } = useForm<ForgoutPasswordFirebase>({
        resolver: yupResolver(schemaForgout)
    })

    function handle(data: ForgoutPasswordFirebase) {
        forgoutPassword(data)
    }

    return (
        <Container>
            <Title>
                Insira o e-mail {'\n'}
                cadastrado
            </Title>

            <ContainerBody>

                <Controlled
                    name="email"
                    control={control}
                    placeholder='Seu e-mail' placeholderTextColor="#fff"
                    error={errors.email}
                />

                <ContainerButton>
                    <Button
                        type="login"
                        onPress={handleSubmit(handle)}
                        title='Próximo' />
                </ContainerButton>

            </ContainerBody>

        </Container>
    )
}