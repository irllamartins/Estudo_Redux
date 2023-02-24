import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumeroMinimo,alterarNumeroMaximo } from '../store/action/numeros'

const Intervalo = props => {

    const { min, max } = props

    return (
        <Card title="Intervalo de Numeros" red>
            <div className='Intervalo'>
                <span>
                    <strong>Minimo:</strong>
                    {/* O + converte para valor numerico*/}
                    <input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Maximo:</strong>
                    <input type="number" value={max} onChange={e => props.alterarMaximo(+e.target.value)}/>
                </span>
            </div>

        </Card>

    )
}
//mapeia o estado do valor na store para esse componente
//coloca os valores propriedade nesse componente
const mapStateToProps = (state) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

//notifica quando ocorre uma alteração nas funções
const mapDispatchToProp = (dispatch) => {
    return {
        alterarMinimo(novoNumero) {
            //action creator->action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            //action creator->action
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

//percorre primeiro a função do conect para depois colocar media como parametro
export default connect(mapStateToProps, mapDispatchToProp)(Intervalo)