//BACK-END JULY 4

import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDOQ2I8qS3WjiAL7X4nVdgHHK49SyItHMM",
    authDomain: "shazam-46ae2.firebaseapp.com",
    databaseURL: "https://shazam-46ae2.firebaseio.com",
    projectId: "shazam-46ae2",
    storageBucket: "shazam-46ae2.appspot.com",
    messagingSenderId: "452468814819"
};
firebase.initializeApp(config);

export default firebase;


// export default class Firebase {
//     static auth();
//     static init() {
//         firebase.initializeApp(config)
//         Fire.auth = firebase.auth();

//     }

    // observeAuth = () =>
    //     firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    // onAuthStateChanged = user => {
    //     if (!user) {
    //         try {

    //             firebase.auth().signInAnonymously();
    //         } catch ({ message }) {
    //             alert(message);
    //         }
    //     }
    // };
    // // get messages
    // get ref() {
    //     return firebase.database().ref('messages');
    // }
    // on = callback =>
    //     this.ref
    //         .limitToLast(20)
    //         .on('child_added', snapshot => callback(this.parse(snapshot)));

    // parse = snapshot => {
    //     const { timestamp: numberStamp, text, user } = snapshot.val();
    //     const { key: _id } = snapshot;
    //     const timestamp = new Date(numberStamp);
    //     const message = {
    //         _id,
    //         timestamp,
    //         text,
    //         user,
    //     };
    //     return message;
    // }
    // off() {
    //     this.ref.off();
    // }

    // get uid() {
    //     return (firebase.auth().currentUser || {}).uid;
    // }

    // get timestamp() {
    //     return firebase.database.ServerValue.TIMESTAMP;
    // }


    // send = messages => {
    //     for (let i = 0; i < messages.length; i++) {
    //         const { text, user } = messages[i];
    //         // 4.
    //         const message = {
    //             text,
    //             user,
    //             timestamp: this.timestamp,
    //         };
    //         this.append(message);
    //     }
    // };

    // append = message => this.ref.push(message);
    //}



