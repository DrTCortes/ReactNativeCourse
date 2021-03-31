import React from 'react'
import {Text, TextInput, Button, View} from 'react-native'
import Estilo from '../style'

import MegaNumeros from './MegaNumero'

export default class Mega extends React.Component{
   
    //  ** Pode ser usado dessa forma**
    //
    // constructor(props){
    //     super(props)
    //     this.estado = {
    //         qtdNumeros: this.props.qtdeNumeros +100} 
    // }
    //
    // ** Ou dessa forma:

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros:[]
    }

    alterarQtdeNumeros = (qtde) => {
        this.setState({qtdeNumeros: + qtde})
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() *60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
        .fill()
        .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
        .sort((a,b) => a-b)
        this.setState({numeros})

    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumeros num={num}/>
        })

    }

    render(){
        return(
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena: 
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderWidth: 2}}
                    placeholder={"Quantidade de Números"}
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumeros}
                />
                <Button title={'Gerar'} onPress={this.gerarNumeros}/>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}