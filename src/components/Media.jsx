import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Media = props => {
    
    const{min,max}=props

    return (
        <Card title="Média dos Numeros" green>
            <div >
                <span>
                    <span>Resultado:</span>
                    <strong>{(max+min)/2}</strong>
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
export default connect(mapStateToProps)(Media)