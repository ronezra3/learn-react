import { createStore } from 'redux'


function counterReduce(state = { value: 0 }, action) {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

let store = createStore(counterReduce)



store.subscribe(() => {
    console.log(store.getState()
    )
})




store.dispatch({ type: 'counter/decremented' })







export default function changeCounter(actionType) {
    store.dispatch({ type: actionType })
    return store.getState()
}
