import React from "react";

import {
    ContainerModal,
    Title,
    Description,
    ContainerButtons,
    ButtonCancell,
    TextBtn,
    ButtonFinish
} from './styles'

interface ModalInfoProps {
    onClosed?: () => void;
    onFinishCall?: (item: any) => void;
}

export function ModalPopUp({onClosed, onFinishCall }: ModalInfoProps) {
    return (
        <ContainerModal>
            <Title>Cancelar chamado?</Title>
            <Description>
                Esta ação não poderá ser desfeita.{'\n'}
                As mensagens ficarão salvas no{'\n'}
                histórico.
            </Description>

            <ContainerButtons>
                <ButtonCancell
                    onPress={onClosed}
                style={{marginRight: 30}}>
                    <TextBtn style={{color: '#0C7384'}}>Cancelar</TextBtn>
                </ButtonCancell>
                <ButtonFinish onPress={onFinishCall}>
                    <TextBtn style={{color: '#fff'}}>Encerrar</TextBtn>
                </ButtonFinish>
            </ContainerButtons>
        </ContainerModal>
    )
}