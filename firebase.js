import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZ0tcVO1lwxVmwWxsLI80OTwHTGWHWicg",
  authDomain: "ipj-rush-romania.firebaseapp.com",
  projectId: "ipj-rush-romania",
  storageBucket: "ipj-rush-romania.firebasestorage.app",
  messagingSenderId: "25973525357",
  appId: "1:25973525357:web:4616824c0883f0a99e2864"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

import { auth } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import {
getFirestore,
doc,
setDoc,
getDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

const firebaseConfig = {
 apiKey:"AIzaSyBZ0tcVO1lwxVmwWxsLI80OTwHTGWHWicg",
 authDomain:"ipj-rush-romania.firebaseapp.com",
 projectId:"ipj-rush-romania"
};

const app=initializeApp(firebaseConfig);

const db=getFirestore(app);

window.register=async()=>{

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

const cred=await createUserWithEmailAndPassword(auth,email,password);

await setDoc(doc(db,"users",cred.user.uid),{

email:email,

nume:"Utilizator",

rol:"Agent",

created:new Date()

});

alert("Cont creat!");

location.href="login.html";

}

window.login=async()=>{

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

await signInWithEmailAndPassword(auth,email,password);

location.href="dashboard.html";

}

window.logout=async()=>{

await signOut(auth);

location.href="login.html";

}

window.checkUser=()=>{

onAuthStateChanged(auth,async(user)=>{

if(!user){

location.href="login.html";

return;

}

const snap=await getDoc(doc(db,"users",user.uid));

const data=snap.data();

document.getElementById("emailUser").innerText=data.email;

document.getElementById("roleUser").innerText=data.rol;

});

}
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

export const db=getFirestore(app);
