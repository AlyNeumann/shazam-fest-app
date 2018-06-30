import firebase from 'firebase';

const uid = {};
const messagesRef = {};

// firebase is initialized in app.js, but it could work in either I think? it can only be in one place though

    // firebase.initializeApp({
    //     apiKey: "AIzaSyDOQ2I8qS3WjiAL7X4nVdgHHK49SyItHMM",
    //     authDomain: "shazam-46ae2.firebaseapp.com",
    //     databaseURL: "https://shazam-46ae2.firebaseio.com",
    //     projectId: "shazam-46ae2",
    //     storageBucket: "shazam-46ae2.appspot.com",
    //     messagingSenderId: "452468814819"
    //   });

// authorize user 
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setUid(user.uid);
    } else {
      firebase.auth().signInAnonymously().catch((error) => {
        alert(error.message);
      });
    }
  });
  function setUid(value) {
    this.uid = value;
  }
  function getUid() {
    return this.uid;
  }

// retrieve the messages from the Backend
function loadMessages(callback) {
    this.messagesRef = firebase.database().ref('messages');
    this.messagesRef.off();
    const onReceive = (data) => {
        const message = data.val();
        callback({
            _id: data.key,
            text: message.text,
            createdAt: new Date(message.createdAt),
            user: {
                _id: message.user._id,
                name: message.user.name,
            },
        });
    };
    this.messagesRef.limitToLast(20).on('child_added', onReceive);
}

// send the message to the Backend
function sendMessage(message) {
    for (let i = 0; i < message.length; i++) {
        this.messagesRef.push({
            text: message[i].text,
            user: message[i].user,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
    }
}

// close the connection to the Backend
function closeChat() {
    if (this.messagesRef) {
        this.messagesRef.off();
    }
}

module.export = {
    loadMessages,
    closeChat,
    sendMessage,
    uid,
    messagesRef,
    setUid,
    getUid
}