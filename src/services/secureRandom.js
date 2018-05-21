import { SHA256 } from "crypto-js";

export default (count = 64) => {
    var nativeArr = new Uint8Array(count);
    var crypto = window.crypto || window.msCrypto;
    return SHA256(Array.prototype.slice.call(crypto.getRandomValues(nativeArr)).join()).toString();
}