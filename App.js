import React from 'react';
import { View, Button } from 'react-native';
import estilo from './components/style';

import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Contador from './components/Contador';
// import { Comp1, Comp2 } from './components/Multi';
// import Primeiro from './components/Primeiro';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import Botao from './components/Botao';

export default () => (
  <View style={estilo.align}> 
    <Pai/>
    
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
  </View>
);