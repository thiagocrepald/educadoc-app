import React from "react";
import { TextInputProps } from 'react-native'
import {
    BoxForm,
    TextInput,
    Button
} from './styles'

export type InputProps = TextInputProps & {
    value?: string;
    type?: string;
}
export function Form({ value,type, ...rest }: InputProps) {

        return (
            <>
                <BoxForm>
                    <TextInput
                        {...rest}
                    />
                </BoxForm>
            </>
        )
    }