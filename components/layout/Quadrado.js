import React from 'react';
import {View} from 'react-native';


export default props => {
    const tamanho = props.tamanho
    return (
        <View style={{
            width: tamanho,
            height: tamanho,
            backgroundColor: props.color || '#000'
        }}/>
    )
}