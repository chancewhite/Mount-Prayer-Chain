  // Import the functions you need from the SDKs you need
  // Firebase documentation
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"; // this contains auth, the event listner for creating a new user, the event listener for logging a user in, the object for getting the currently signed in user, and the logout event
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBNbTDHQcdxP3ou4IQFYPKHbmnZNJVsSeo",
    authDomain: "authentication-6ccca.firebaseapp.com",
    databaseURL: "https://authentication-6ccca-default-rtdb.firebaseio.com",
    projectId: "authentication-6ccca",
    storageBucket: "authentication-6ccca.appspot.com",
    messagingSenderId: "277980008767",
    appId: "1:277980008767:web:73e31d14ceca8fc212038a",
    measurementId: "G-VY6JZVT2FE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

    signUp.addEventListener('click',(e) => { // on click, new user gets added to database

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var first__name = document.getElementById('first__name').value;
        var last__name = document.getElementById('last__name').value;

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        set(ref(database, 'users/' + user.uid),{
        first__name: first__name,
        last__name: last__name,
        email: email 
        })
        // INSERT CODE HERE
        //-------------------------------------------------------
        // TAKE NEW USER TO HOME PAGE
        // ------------------------------------------------------
        alert('user created');
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
        // ..
     });
    
    });

    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => { // Get the currently signed-in user
        if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // here you can get currently signed in user with user object
        // ...
        } else {
            // User is signed out
             // ...
             // if you want to make any changes after user logs in you can code it here
          }
    });

    logout.addEventListener('click',(e)=>{ // logging out a user 
        signOut(auth).then(() => {
        // Sign-out successful.
        alert('user logged out');
        }).catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
        });
    });