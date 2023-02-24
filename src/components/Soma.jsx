import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Soma =props => {
      
    const{min,max}=props

    return (
        <Card title="Soma dos Numeros" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min+max}</strong>
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
export default connect(mapStateToProps)(Soma)