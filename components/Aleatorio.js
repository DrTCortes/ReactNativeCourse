import React from 'react';
import { Text, Button } from 'react-native';
import Estilo from './style';

// export default ({min, max}) => {
//     function randonNumber(){
//         const rng = parseInt(Math.random() * (max - min +1)) + min;
        
//         <Text style={Estilo.txtG}>
//             O número sorteado entre {min} e {max} é: {rng}
//         </Text>
//     }
//     return(
//     <Button title="Executar!" onPress={randonNumber}/>
//     )
// }


export default ({min, max}) => {
    function randonNumber(){
        const rng = parseInt(Math.random() * (max - min +1)) + min;
        
        console.log("O número sorteado entre" +  min + "e" + max + "é:" + rng)
    
    }
    return(
    <Button title="Gerar!" onPress={randonNumber}/>
    )
}