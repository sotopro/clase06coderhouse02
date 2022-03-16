import { StyleSheet } from 'react-native'
import { fontSize, margin, colors } from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardTitle: {
        fontSize: fontSize.title,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: margin.medium,
        color: colors.primaryText,
    },
    inputContainer: {
        flex: 1,
        flexGrow: 0.5,
        marginHorizontal: margin.medium,
    },
    label: {
        fontSize: fontSize.primaryText,
        fontWeight: 'bold',
        color: colors.primaryText,
        marginBottom: margin.small,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonsContainer: {
        flex: 1,
        flexGrow: 0.18,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: margin.medium,
    },
    containerConfirmed: {
        flex: 1,
        flexGrow: 0.25,
        justifyContent: 'center',
        marginVertical: margin.medium,
    },
    confirmedText: {
        fontSize: fontSize.large,
        fontWeight: 'bold',
        color: colors.primary,
        justifyContent: 'center',
        alignSelf: 'center',
    }
});