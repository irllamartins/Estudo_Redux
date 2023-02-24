import React from 'react'
import Card from './Card'

import { connect } from 'react-redux'

const Sorteio= props => {

    const{min,max}=props

    const aleatorio = parseInt(Math.random()*(max-min))+min
    return (
        <Card title="Sorteio de um numero" purple>
            <div >
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>

        </Card>

    )
}

//mapeia o estado do valor na store para esse componente
//coloca propriedade nesse componente
const mapStateToProps=(state)=>{
    return{
       min:state.numeros.min,
       max:state.numeros.max
    }
}
//percorre primeiro a função do conect para depois colocar media como parametro
export default connect(mapStateToProps)(Sorteio)