import React, {useState} from 'react';
import {Text} from 'react-native';
import Estilo from '../style';
import ContadorBotao from './ContadorBotao';

import ContadorDisplay from './ContadorDisplay'


export default props => {
    const [num, setNumero] = useState(10)

    const inc = ()=> setNumero(num + 1)
    const dec = ()=> setNumero(num - 1)
    return (
        <>
            <Text style={Estilo.txtG}>
                Contador
            </Text>
            <ContadorDisplay num={num} />
            <ContadorBotao inc={inc} dec={dec}/>
        </>
    )
}