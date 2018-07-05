import firebase from 'firebase';

// const uid = {};
// const messagesRef = {};


// export default class Fire {
//     constructor() {
//         this.observeAuth();
//         }
    
//     observeAuth = () =>
//         firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
//     onAuthStateChanged = user => {
//         if (!user) {
//             try {
                
//                 firebase.auth().signInAnonymously();
//             } catch ({ message }) {
//                 alert(message);
//             }
//         }
//     };
//     // get messages
//     get ref() {
//         return firebase.database().ref('messages');
//     }
//     on = callback =>
//         this.ref
//             .limitToLast(20)
//             .on('child_added', snapshot => callback(this.parse(snapshot)));

//     parse = snapshot => {
//         const { timestamp: numberStamp, text, user } = snapshot.val();
//         const { key: _id } = snapshot;
//         const timestamp = new Date(numberStamp);
//         const message = {
//             _id,
//             timestamp,
//             text,
//             user,
//         };
//         return message;
//     }
//     off() {
//         this.ref.off();
//     }
    
//     get uid() {
//         return (firebase.auth().currentUser || {}).uid;
//     }
    
//     get timestamp() {
//         return firebase.database.ServerValue.TIMESTAMP;
//     }

    
//     send = messages => {
//         for (let i = 0; i < messages.length; i++) {
//             const { text, user } = messages[i];
//             // 4.
//             const message = {
//                 text,
//                 user,
//                 timestamp: this.timestamp,
//             };
//             this.append(message);
//         }
//     };
    
//     append = message => this.ref.push(message);

    
// }
// // retrieve the messages from the Backend
// function loadMessages(callback) {
//     this.messagesRef = firebase.database().ref('messages');
//     this.messagesRef.off();
//     const onReceive = (data) => {
//         const message = data.val();
//         callback({
//             _id: data.key,
//             text: message.text,
//             createdAt: new Date(message.createdAt),
//             user: {
//                 _id: message.user._id,
//                 name: message.user.name,
//             },
//         });
//     };
//     this.messagesRef.limitToLast(20).on('child_added', onReceive);
// }

// // send the message to the Backend
// function sendMessage(message) {
//     for (let i = 0; i < message.length; i++) {
//         this.messagesRef.push({
//             text: message[i].text,
//             user: message[i].user,
//             createdAt: firebase.database.ServerValue.TIMESTAMP,
//         });
//     }
// }

// // close the connection to the Backend
// function closeChat() {
//     if (this.messagesRef) {
//         this.messagesRef.off();
//     }
// }

// module.export = {
//     loadMessages,
//     closeChat,
//     sendMessage,
//     uid,
//     messagesRef,
//     setUid,
//     getUid
// }