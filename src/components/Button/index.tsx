import React, { useContext } from 'react'
import {
    ContainerButton,
    TitleButton,
    ContainerTextAccount,
    Loading
} from './styles'

import { TouchableOpacityProps } from 'react-native'
import { TextAccount } from '../TextAccount'
import { NavigateProps } from '../../utils/navigateProps'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../context/AuthContext'

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    type?: string;
}

export function Button({ type, title, ...rest }: ButtonProps) {

    const { navigate } = useNavigation<NavigateProps>()

    const { loadingAuth } = useContext(AuthContext)

    if (type === 'login') {
        return (
            <>
                <ContainerTextAccount>
                    <TextAccount
                        onPress={() => navigate('Login')}
                        title="Já possui uma conta?"
                        strong="Login"
                    />
                </ContainerTextAccount>

                <ContainerButton {...rest}>
                    {loadingAuth ? (
                        <Loading size={25} color="#0c7384" />
                    ) : (

                        <TitleButton>{title}</TitleButton>
                    )}
                </ContainerButton>
            </>
        )
    } else if (type === 'cadaster') {
        return (
            <>
                <ContainerTextAccount>
                    <TextAccount
                        onPress={() => navigate('StudentOrMentor')}
                        title="Não possui uma conta?"
                        strong="Cadastre-se"
                    />
                </ContainerTextAccount>

                <ContainerButton {...rest}>
                    {loadingAuth ? (
                        <Loading size={25} color="#0c7384" />
                    ) : (

                        <TitleButton>{title}</TitleButton>
                    )}
                </ContainerButton>
            </>
        )
    } else
        return (
            <>
                <ContainerButton {...rest}>
                    {loadingAuth ? (
                        <Loading size={25} color="#0c7384" />
                    ) : (

                        <TitleButton>{title}</TitleButton>
                    )}
                </ContainerButton>
            </>
        );
}
