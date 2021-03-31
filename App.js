import React from 'react';
import { SafeAreaView, Button, StyleSheet } from 'react-native';

import Mega from './components/mega/Mega'
// import FlexboxV4 from './components/layout/FlexboxV4'
// import FlexboxV3 from './components/layout/FlexboxV3'
// import FlexboxV2 from './components/layout/FlexboxV2'
// import FlexboxV1 from './components/layout/FlexboxV1'
// import DigiteNome from './components/CompControlado'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import RendCondicional from './components/RendCondicional'
// import Diferenciar from './components/Diferenciar'
// import Contador from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Contador from './components/Contador';
// import { Comp1, Comp2 } from './components/Multi';
// import Primeiro from './components/Primeiro';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import Botao from './components/Botao';

export default () => (
  <SafeAreaView style={style.App}> 
    <Mega qtdeNumeros={5}/>
    {/* <FlexboxV4/> */}
    {/* <FlexboxV3/> */}
    {/* <FlexboxV2/> */}
    {/* <FlexboxV1/> */}
    {/* <DigiteNome/> */}
    {/* <ListaProdutosV2/> */}
    {/* <RendCondicional num={2}/> */}
    {/* <Diferenciar/>     */}
    {/* <Contador/> */}
    {/* <Pai/> */}
    {/* <Contador inicial={50} passo={3}/>
    <Contador/> */}
    {/* <Botao/> */}
    {/* <Aleatorio min={7} max={27}/> */}
    {/* <MinMax min={2} max={20} />
    <MinMax min={40} max={80} /> */}
    {/* <Comp1/>
    <Comp2/>
    <Primeiro/> */}
  </SafeAreaView>
)

const style = StyleSheet.create({
  App:{
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    margin:20,
  }
})