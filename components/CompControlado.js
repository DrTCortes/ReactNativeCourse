import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import Estilo from './style';


export default props => {
    const [nome, setNome] = useState('Teste')
    return (
        <View style={Estilo.txtG}>
            <Text>{nome}</Text>
            <TextInput 
                style={Estilo.lista}
                value={nome}
                placeholder={'Digite seu nome'}
                onChangeText={nome => setNome(nome)}

            />
        </View>
    )
}