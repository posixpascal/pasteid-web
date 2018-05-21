import { CREATE_PASTE } from "./actionTypes";

export default (payload) => {
    return {
        type: CREATE_PASTE,
        ...payload
    }
}