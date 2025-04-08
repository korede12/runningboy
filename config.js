const firebaseConfig = {

    apiKey: "jfjfifjufunufnf",
    authDomain: "asalatnuraindeenlive.firebase.com",
    databaseURL: "https://asalatnuraindeenlive-default-rtdb.firebaseio.com/",
    projectId: "asalatnuraindeenlive",
    storageBucket: "asalatnuraindeenlive.appspot.com",


};

import {drawLine} from "./script.js";
import{ initializeApp } from " ";
import{ getAuth, onAuthStateChanged} from " ";
import {getDatabase, ref, onValue, get, push }from " ";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const line = drawLine(app);

onAuthStateChanged(auth, (user) => {

    if (!user) {


        window.location.href = "login.html";
    }else { displayAllaccounts();

    }
    });


    function displayAllaccounts(){
        const accountsRef = ref(db, 'accounts');
        onValue(accountsRef, (snapshot) => {
            const tbody = document.getElementById("accountHoldersBody");
            tbody.innerHTML = "";
            snapshot.forEach(childSnapshot =)

        })
    }
function displayApp(){
    const x = line;
}