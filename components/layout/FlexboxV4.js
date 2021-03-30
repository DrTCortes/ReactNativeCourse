import React from 'react';
import {View, StyleSheet} from 'react-native';

import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={Estilo.FlexV4}>
            <View style={Estilo.View0}/>
            <View style={Estilo.View1}/>
            <View style={Estilo.View2}/>
        </View>
    )
}

const Estilo = StyleSheet.create({
    FlexV4:{
        flexGrow:1,
        width:100,
        backgroundColor: "#777"
    },
    View0:{
        height: 200,
        backgroundColor: '#123477',
    },
    View1:{
        flexGrow:8,
        backgroundColor: '#471221',
    },
    View2:{
        flexGrow:2,
        backgroundColor: '#546231',
    },
})