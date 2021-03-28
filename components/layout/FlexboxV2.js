import React from 'react';
import {View, StyleSheet} from 'react-native';

import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={Estilo.FlexV2}>
            <Quadrado color={'#487562'}/>
            <Quadrado color={'#f00'}/>
            <Quadrado color={'#0f0'}/>
            <Quadrado color={'#00f'}/>
            <Quadrado color={'#452440'}/>
        </View>
    )
}

const Estilo = StyleSheet.create({
    FlexV2:{
        flex:1,
        width:'100%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        backgroundColor: "#777"
    }
})