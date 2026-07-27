import { app } from "./firebase.js";

import {
getStorage,
ref,
uploadBytes,
getDownloadURL
}
from "https://www.gstatic.com/firebasejs/10.13.2/firebase-storage.js";

const storage=getStorage(app);

export async function uploadImage(file){

const storageRef=ref(
storage,
"rapoarte/"+Date.now()+"_"+file.name
);

await uploadBytes(storageRef,file);

return await getDownloadURL(storageRef);

}
