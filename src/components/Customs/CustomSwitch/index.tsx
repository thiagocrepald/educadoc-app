import React, { useState } from "react";
import {Container } from './styles'
import {Switch} from "react-native";

export function CustomSwitch() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <Container>
            <Switch
                trackColor={{ false: "#cfcfcf", true: "#cfcfcf" }}
                thumbColor={isEnabled ? "#07be3e" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </Container>
    );
}
