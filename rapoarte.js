import { auth, db } from "./firebase.js";

import {
collection,
addDoc,
query,
where,
getDocs,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

let user;

onAuthStateChanged(auth, async(u)=>{

if(!u){

location.href="login.html";

return;

}

user=u;

incarca();

});

document
.getElementById("trimite")
.onclick=async()=>{

const titlu=document.getElementById("titlu").value;

const descriere=document.getElementById("descriere").value;

if(!titlu || !descriere){

alert("Completează toate câmpurile.");

return;

}

await addDoc(collection(db,"rapoarte"),{

uid:user.uid,

email:user.email,

titlu,

descriere,

status:"În așteptare",

createdAt:serverTimestamp()

});

alert("Raport trimis!");

document.getElementById("titlu").value="";

document.getElementById("descriere").value="";

incarca();

};

async function incarca(){

const q=query(

collection(db,"rapoarte"),

where("uid","==",user.uid)

);

const docs=await getDocs(q);

const lista=document.getElementById("lista");

lista.innerHTML="";

docs.forEach(doc=>{

const r=doc.data();

lista.innerHTML+=`

<div class="card">

<h3>${r.titlu}</h3>

<p>${r.descriere}</p>

<p>Status: <b>${r.status}</b></p>

</div>

`;

});

}
import { uploadImage } from "./storage.js";
