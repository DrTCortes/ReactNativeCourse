import React from 'react';
import {Text, Button} from 'react-native';


export default props => {
    function gerarNumero(max, min){
        return parseInt(Math.random() * (max - min +1)) + min
    }

    return (
        <Button
            title="Executar"
            onPress={function(){
               const n =  gerarNumero(props.min, props.max)
               props.funcao(n, "O número gerado é: ")
            }}
        />
    )
}