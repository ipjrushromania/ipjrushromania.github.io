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
