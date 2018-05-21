import { CREATE_PASTE, RESET_PASTE, PUBLISHED_PASTE } from "../actions/actionTypes";
import pasteService from "../services/pastes";
import { SUCCESS, CREATING, RESET } from "../constants";

export default (state = {}, action) => {
    switch (action.type){
        case RESET_PASTE:
            state = {
                status: RESET
            }
            break;

        case CREATE_PASTE:
            pasteService.create(action.content);
            state = {
                status: CREATING
            }
            break;
        
        case PUBLISHED_PASTE:
            state = {
                status: SUCCESS,
                ...action,
            }
            break;
        default:
            
    }

    return state;
} 