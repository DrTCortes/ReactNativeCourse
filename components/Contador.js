import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import Estilo from './style'

export default ({inicial = 0, passo = 1}) => {
    let [numero, setNumero] = useState(inicial);

    const inc = () => setNumero(numero + passo);
    const dec = () => setNumero(numero - passo);

    return (
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
                <Button title="Soma" onPress={inc}/>
                <Button title="Subtração" onPress={dec}/>
        </>
    )
}