import React, {useState} from 'react'
import {Text} from 'react-native'
import Estilo from '../style'
import Filho from './Filho'

export default props => {
    const [texto, setTexto] = useState("Aperte o botão ")
    const [num, setNum] = useState("para gerar um número")

    function exibirValor(numero, texto){
        setNum(numero)
        setTexto(texto)
    }

    return(
        <>
        <Text style={Estilo.txtG}>{texto}{num}</Text>
        <Filho

            min={1}
            max={60}
            funcao={exibirValor}
        />
        </>
        )
}