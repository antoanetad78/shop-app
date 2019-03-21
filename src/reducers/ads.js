import {LOAD_ADS} from '../actions/ads'
const initialState = []

const ads = (state=initialState, action) =>  {
    switch(action.type) {
        case LOAD_ADS:
        return action.payload

        default:
        return state
    }
}

export default ads