import {
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "./firebase.js";

let uploadFile = () => {
    const flie = document.getElementById("file")
}

const uploadBtn = document.getElementById("uploadBtn");
uploadBtn.addEventListener("click", uploadFile)