import React from 'react'
import {Text, TextInput} from 'react-native'
import Estilo from '../style'

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
        qtdeNumeros: this.props.qtdeNumeros
    }

    alterarQtdeNumeros = (qtde) => {
        this.setState({qtdeNumeros: qtde})
    }    

    render(){
        return(
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena: 
                    {this.state.qtdeNumeros}
                </Text>
                <TextInput
                keyboardType={'numeric'}
                    style={{borderWidth: 2}}
                    placeholder={"Quantidade de Números"}
                    value={this.state.qtdeNumeros}
                    onChangeText={this.alterarQtdeNumeros}
                />
            </>
        )
    }
}