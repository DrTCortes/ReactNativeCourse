import React from 'react';
import {Text} from 'react-native';
import Estilo from '../style';

import Produtos from './Produtos'

export default props => {
    function retornaLista(){
        return Produtos.map(p => {
            return (
            <Text key={p.id} style={Estilo.lista}>
                {p.id}º {p.nome} R${p.preco}
            </Text>
        )})
    }
    return (
    <>
        <Text style={Estilo.txtG}>
            Lista de Produtos
        </Text>
        {retornaLista()}
    </>
    )
}