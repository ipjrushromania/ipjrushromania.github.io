import { auth } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

window.register = async function(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

try{

await createUserWithEmailAndPassword(auth,email,password);

alert("Cont creat cu succes!");

location.href="login.html";

}catch(err){

alert(err.message);

}

}

window.login = async function(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

try{

await signInWithEmailAndPassword(auth,email,password);

location.href="dashboard.html";

}catch(err){

alert(err.message);

}

}

window.logout = async function(){

await signOut(auth);

location.href="login.html";

}
