import React from 'react';
import { Text } from 'react-native';

import Estilo from './style';

export function Comp(){
    return <Text style={Estilo.txtP}>Comp 01</Text>
}
function Comp1(){
    return <Text style={Estilo.txtP}>Comp 02</Text>
}
function Comp2(){
    return <Text style={Estilo.txtP}>Comp 03</Text>
}

export {Comp1, Comp2}