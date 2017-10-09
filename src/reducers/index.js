import { ACTION_LOAD } from './actions';

const reducer = (state, action) => {
    switch(action.type) {
        case ACTION_LOAD:
            console.log(`reducer: handling ACTION_LOAD`);
            break;
        default:
            return state;
    }
}
export default reducer;