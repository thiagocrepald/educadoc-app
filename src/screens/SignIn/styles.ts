import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background
    },
    image: {
        width: 246,
        height: 213
    },
    content: {
        marginTop: 10,
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 28,
        marginBottom: 16,
        fontFamily: theme.fonts.title800,
        lineHeight: 40
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 73,
        fontFamily: theme.fonts.text400,
    },
});