import {ADD_GRADIENT} from "../actions/action-types";
import {START_EDITING_GRADIENT} from "../actions/action-types";
import {CONFIRM_EDIT} from '../actions/action-types';

const initialState = {
    gradientsList: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_GRADIENT:
            return {...state, gradientsList: [...state.gradientsList, action.gradient]};
        case START_EDITING_GRADIENT:
            return {...state, gradientEdit: action.payload};
        case CONFIRM_EDIT:
            console.log('here');
            return {
                ...state, gradientsList: state.gradientsList.map((item, index) => {
                    if (index === state.gradientEdit) {
                        return {
                            ...item,
                            first: action.payload.newEditedGradient.first,
                            second: action.payload.newEditedGradient.second
                        }
                    }
                    return item;
                })
            };
        default:
            return state;
    }
}

export default rootReducer;