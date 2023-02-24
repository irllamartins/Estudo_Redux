
//Action Creator
//altera minimo
export const alterarNumeroMinimo =(novoNumero)=>{
    return{
        //action
        type:'NUM_MIN_ALTERADO',
        payload:novoNumero
    }
}

//altera maximo
export const alterarNumeroMaximo =(novoNumero)=>{
    return{
        //action
        type:'NUM_MAX_ALTERADO',
        payload:novoNumero
    }
}