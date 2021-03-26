import React from 'react';
import {Text, View} from 'react-native';
import Estilo from './style';


export default props => {
    return (
        <View>
            <Text style={Estilo.txtG}>O Resultado é: </Text>
            <Text style={Estilo.txtG}>
                {props.num % 2 === 0 
                ? 'Par'
                : 'Impar'}
            </Text>
        </View>
    )
}