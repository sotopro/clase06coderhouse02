import React from 'react';
import {
    View,
    TextInput
} from 'react-native'

import { styles } from './styles';


const Input = ({ handleOnChange, style, ...props}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                {...props}
                style={[style, styles.input]}
                onChangeText={handleOnChange}
            />
        </View>
    )
}

export default Input;