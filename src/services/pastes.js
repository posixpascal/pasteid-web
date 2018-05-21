import pasteStore from "../stores/pasteStore";
import publishedPaste from "../actions/publishedPaste";
import encrypt from "./encrypt";
import decrypt from "./decrypt";
import secureRandom from "./secureRandom";
const FETCH_OPTIONS = {
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors',
    headers: {
        'content-type': 'application/json'
    },
    redirect: 'error',
    referrer: 'no-referrer'
}

class PasteService {
    constructor() {
        this.api = (window.location.href.indexOf("localhost") > -1 ? "http://localhost:3002" : "https://api.paste.id";
    }

    get(id) {
        const endpointUrl = `${this.api}/${id}`;

        return fetch(endpointUrl, FETCH_OPTIONS)
            .then((req) => req.json())
            .then((res) => {
                res.content = decrypt(res.content, window.location.hash.substring(1));
                return res;
            });
    }

    create(payload) {
        const endpointUrl = `${this.api}/storage`;
        const randomPassword = secureRandom();
        payload = encrypt(payload, randomPassword);

        return fetch(endpointUrl, {
            ...FETCH_OPTIONS,
            method: "POST",
            body: JSON.stringify({ content: payload })
        })
            .then((req) => req.json())
            .then((payload) => {
                payload.password = randomPassword;
                pasteStore.dispatch(publishedPaste(payload));
            });
    }
}

export default new PasteService();