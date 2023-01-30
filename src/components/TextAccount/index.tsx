import React from "react";
import {
    ContainerTextAccount,
    Title,
    Button,
    Strong
} from './styles'
import { TouchableOpacityProps } from 'react-native'

interface Props extends TouchableOpacityProps {
    title: string;
    strong: string;
    onPress: () => void;
}

export function TextAccount({ title, strong, onPress, }: Props) {
    return (
        <ContainerTextAccount>
            <Title>{title}</Title>
            <Button onPress={onPress}>
                <Strong>{strong}</Strong>
            </Button>
        </ContainerTextAccount>
    )
}