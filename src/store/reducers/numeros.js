const INITIAL_STATE ={
    min: 1,
    max: 10
}
export default function (state=INITIAL_STATE, action) {

    switch (action.type) {
        case "NUM_MIN_ALTERADO":
            return {
                ...state, min: action.payload
            }
        case "NUM_MAX_ALTERADO":
            return {
                ...state, max: action.payload
            }
        default:
            return state

    }

}