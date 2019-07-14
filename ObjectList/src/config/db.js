import Firebase from 'firebase';
 let config = {
    apiKey: "AIzaSyA-kbfdLZH6R48baObgZmqjjj7r7M_5FsI",
    authDomain: "objectlist-6922f.firebaseapp.com",
    databaseURL: "https://objectlist-6922f.firebaseio.com",
    projectId: "objectlist-6922f",
    storageBucket: "",
    messagingSenderId: "762595080791",
    appId: "1:762595080791:web:9be876f90d88773d"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();