import React from 'react';
import {View, StyleSheet} from 'react-native';

import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={Estilo.FlexV3}>
            <Quadrado color={'#487562'} tamanho={'5%'}/>
            <Quadrado color={'#f00'} tamanho={'7%'}/>
            <Quadrado color={'#0f0'} tamanho={'9%'}/>
            <Quadrado color={'#00f'} tamanho={'11%'}/>
            <Quadrado color={'#452440'} tamanho={'13%'}/>
        </View>
    )
}

const Estilo = StyleSheet.create({
    FlexV3:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
        height: 400,
        width:'100%',
        backgroundColor: "#777"
    }
})