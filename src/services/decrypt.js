import { AES, enc } from "crypto-js";

export default (message, password) => {
    return AES.decrypt(message, password).toString(enc.Utf8);
}