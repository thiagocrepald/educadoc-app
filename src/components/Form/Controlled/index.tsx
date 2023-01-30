import React from 'react'

import { TextInputMask } from 'react-native-masked-text'
import { Control, Controller, FieldError } from 'react-hook-form'
import { Form, InputProps } from '../'
import { Error } from './styles'
import { BoxForm } from '../styles'

type Props = InputProps & {
    control: Control<any>;
    name: string;
    error?: FieldError;
    type?: string;
}

export function Controlled({ control, name, error, type, ...rest }: Props) {

    if (type === "phone") {
        return (
            <>
                <Controller
                    name={name}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <BoxForm>
                            <TextInputMask
                                style={{ padding: 16, color: '#fff' }}
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99)'
                                }}
                                onChangeText={onChange}
                                value={value}
                                {...rest}
                            />
                        </BoxForm>
                    )}
                />
                {error && <Error>{error.message}</Error>}
            </>
        )
    } else if (type === "cpf") {
        return (
            <>
                <Controller
                    name={name}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <BoxForm>
                            <TextInputMask
                                style={{ padding: 16, color: '#fff' }}
                                type={'cpf'}
                                keyboardType="numeric"
                                onChangeText={onChange}
                                value={value}
                                {...rest}
                            />
                        </BoxForm>
                    )}
                />
                {error && <Error>{error.message}</Error>}
            </>
        )
    } else if (type === "date") {
        return (
            <>
                <Controller
                    name={name}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <BoxForm>
                            <TextInputMask
                                style={{ padding: 16, color: '#fff' }}
                                maxLength={10}
                                keyboardType="numeric"
                                type={'datetime'}
                                onChangeText={onChange}
                                value={value}
                                {...rest}
                            />
                        </BoxForm>
                    )}
                />
                {error && <Error>{error.message}</Error>}
            </>
        )
    } else
        return (
            <>
                <Controller
                    name={name}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Form
                            onChangeText={onChange}
                            value={value}
                            {...rest}
                        />
                    )}
                />
                {error && <Error>{error.message}</Error>}
            </>
        )
}
