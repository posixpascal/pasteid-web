import { AES } from "crypto-js";

export default (message, password) => { 
    return AES.encrypt(message, password).toString();
}