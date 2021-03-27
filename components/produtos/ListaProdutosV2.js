import React from 'react';
import {Text, FlatList} from 'react-native';
import Estilo from '../style';

import Produtos from './Produtos'

export default props => {
    const produtosRender = ({item: p}) => {
            return (<Text style={Estilo.lista}>{p.id}º {p.nome} R${p.preco}</Text>)
        }
return(
    <>
        <Text style={Estilo.txtG}>
            Lista de Produtos V2
        </Text>
        <FlatList
            data={Produtos}
            keyExtractor={i=> `${i.id}`}
            renderItem={produtosRender}
        />
    </>
    )
}