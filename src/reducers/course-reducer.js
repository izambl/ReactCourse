import { CREATE_COURSE } from '../actions/course-actions';

export default function courseReducer(state = [], action) {

    switch (action.type) {
        case CREATE_COURSE:
            return [...state, Object.assign({}, action.course)];
            break;
        default:
            return state;
            break;
    };

    return state;
}