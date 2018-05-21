import { PUBLISHED_PASTE } from "./actionTypes";

export default (payload) => {
    return {
        type: PUBLISHED_PASTE,
        ...payload
    }
}