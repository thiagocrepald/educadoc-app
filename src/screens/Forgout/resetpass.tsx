import React from 'react';

import {
    Container,
    Title,
    ContainerBody,
    ContainerButton
} from './styles'

import { Button } from '../../components/Button'
import { StackParamsList } from '../../routes/auth.routes'
import { Controlled } from '../../components/Form/Controlled';
import { schemaResetSenha } from '../../utils/validationForm'

import { useForm } from 'react-hook-form'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup'

type FormDataResetPassword = {
    senha: string;
    confirm_senha: string;
}

export function ResetPassword() {

    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataResetPassword>({
        resolver: yupResolver(schemaResetSenha)
    })

    function handle(data: FormDataResetPassword) {
        navigation.navigate('AlertMessageSucess')
    }

    return (
        <Container>
            <Title style={{ marginBottom: 116 }}>Cadastrar nova senha</Title>

            <ContainerBody>

                <Controlled
                    name="senha"
                    control={control}
                    placeholder='Nova senha'
                    placeholderTextColor="#fff"
                    error={errors.senha}
                />
                <Controlled
                    name="confirm_senha"
                    control={control}
                    placeholder='Confirme a senha'
                    placeholderTextColor="#fff"
                    error={errors.confirm_senha}
                />

                <ContainerButton>
                    <Button
                        onPress={handleSubmit(handle)}
                        title='Próximo' />
                </ContainerButton>
            </ContainerBody>

        </Container>
    );
}