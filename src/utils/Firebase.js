export class Firebase {
    constructor() {
        this._config = {       
            apiKey: "AIzaSyDLHcK6YjS7UE488xFZHekvpuUVdI3YAAU",
            authDomain: "whatsapp-clone-a93a1.firebaseapp.com",
            databaseURL: 'https://whatsapp-clone-a93a1.firebaseapp.com',
            projectId: "whatsapp-clone-a93a1",
            storageBucket: "whatsapp-clone-a93a1.appspot.com",
            messagingSenderId: "581697670637",
        }

        this.init();
    }

    init() {
        if(!window._initializedFirebase) {
            firebase.initializeApp(this._config);
            
            firebase.firestore().settings({
                timestampsInSnapshots: true
            });
            
            window._initializedFirebase = true;
        }
    }

    static db() {
        return firebase.firestore();
    }

    static hd() {
        return firebase.storage();
    }

    initAuth() {
        return new Promise((s, f) => {
            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    let token = result.credential.accessToken;
                    let user = result.user;

                    s({ user, token });
                })
                .catch(err => {
                    f(err);
                });
        });
    }
}