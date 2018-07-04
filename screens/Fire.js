//BACK-END JULY 4

import firebase from 'firebase';
//firebase is initialized in Login.js
//this is where firebase should be initialized, but it's not working, sadness

class Fire {
    constructor() {
        this.observeAuth();
        }
    
    observeAuth = () =>
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    onAuthStateChanged = user => {
        if (!user) {
            try {
                
                firebase.auth().signInAnonymously();
            } catch ({ message }) {
                alert(message);
            }
        }
    };
    // get messages
    get ref() {
        return firebase.database().ref('messages');
    }
    on = callback =>
        this.ref
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot)));

    parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        const timestamp = new Date(numberStamp);
        const message = {
            _id,
            timestamp,
            text,
            user,
        };
        return message;
    }
    off() {
        this.ref.off();
    }
    
    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
    
    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }

    
    send = messages => {
        for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            // 4.
            const message = {
                text,
                user,
                timestamp: this.timestamp,
            };
            this.append(message);
        }
    };
    
    append = message => this.ref.push(message);

    
}
Fire.shared = new Fire();
export default Fire;