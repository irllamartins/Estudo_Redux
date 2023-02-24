import { combineReducers, legacy_createStore as createStore } from "redux";
import numerosReducers from './reducers/numeros'

//pegar o valor atual para retornar o proximo estado
//gera estado
const reducers = combineReducers({
    numeros: numerosReducers
})

//cria estado
function storeConfig() {
    return createStore(reducers)
}

export default storeConfig