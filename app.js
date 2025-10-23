import {
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "./firebase.js";

let uploadFile = () => {
    const file = document.getElementById("file")
    console.log(file.files[0])
    const storageRef = ref(storage, `images/${file.files[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            console.error(error)
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
            });
        }
    );


}

const uploadBtn = document.getElementById("uploadBtn");
uploadBtn.addEventListener("click", uploadFile)