import React from 'react';
import {Button, View, StyleSheet} from 'react-native';


export default props => {
    return (
        <View style={style.Display}>
            <Button title='Inc'onPress={props.inc}/>
            <Button title='Dec'onPress={props.dec}/>
        </View>
    )
}

const style = StyleSheet.create({
    Display:{
        width: 200,
        margin: 5,
    }
    })